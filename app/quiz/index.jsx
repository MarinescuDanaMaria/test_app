import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Dimensions, Image, Platform, Pressable, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Button from '../../components/Shared/Button';
import { db } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';

export default function Quiz() {
  const { courseParams, quizIndex } = useLocalSearchParams();
  const course = JSON.parse(courseParams);
  const rawQuiz = course?.quiz?.[parseInt(quizIndex)];
  const quiz = rawQuiz?.questions;
  const totalPoints = rawQuiz?.totalPoints || 100;
  const pointsPerQuestion = totalPoints / quiz.length;

  const [selectedOption, setSelectedOption] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const GetProgress = (currentPage) => {
    const per = currentPage / quiz?.length;
    return per;
  };

  const onOptionSelect = (selectedChoice) => {
    const isCorrect = quiz[currentPage]?.correctAns === selectedChoice;
    setResult(prev => ({
      ...prev,
      [currentPage]: {
        userChoice: selectedChoice,
        isCorrectquiz: isCorrect,
        question: quiz[currentPage]?.question,
        correctAns: quiz[currentPage]?.correctAns,
        points: isCorrect ? pointsPerQuestion : 0
      }
    }));
  };

  const onQuizFinish = async () => {
    setLoading(true);
    try {
      await updateDoc(doc(db, 'courses', course?.docId), {
        quizResult: result
      });
      setLoading(false);
      router.replace({
        pathname: '/quiz/summary',
        params: {
          quizResultParam: JSON.stringify(result),
          totalPoints: totalPoints.toString()
        }
      });
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <View style={{ paddingTop: Platform.OS === 'ios' && 55 }}>
      <Image source={require('./../../assets/images/gradient.png')} style={{ height: 800, width: '100%' }} />

      <View style={{ position: 'absolute', top: 70, left: 20, width: '90%' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color={Colors.WHITE} />
          </Pressable>
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 25, color: Colors.WHITE }}>{currentPage + 1} din {quiz?.length}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Progress.Bar progress={GetProgress(currentPage)} width={Dimensions.get('window').width * 0.85} color={Colors.WHITE} height={10} borderRadius={10} />
        </View>

        <View style={{ padding: 25, backgroundColor: Colors.WHITE, marginTop: 30, height: Dimensions.get('screen').height * 0.65, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1.41 }}>
          <Text style={{ fontSize: 25, fontFamily: 'outfit-bold', textAlign: 'center' }}>{quiz[currentPage]?.question}</Text>

          {quiz[currentPage]?.options.map((item, index) => (
            <TouchableOpacity
              onPress={() => { setSelectedOption(index); onOptionSelect(item); }}
              key={index}
              style={{
                padding: 20,
                borderWidth: 1,
                borderRadius: 15,
                marginTop: 10,
                borderColor: selectedOption === index ? Colors.GREEN : null,
                backgroundColor: selectedOption === index ? Colors.LIGHT_GREEN : null
              }}>
              <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {(selectedOption?.toString() && quiz?.length - 1 > currentPage) &&
          <Button text={"Înainte"} onPress={() => { setCurrentPage(currentPage + 1); setSelectedOption(null); }} />}

        {(selectedOption?.toString() && quiz?.length - 1 === currentPage) &&
          <Button text={"Finalizează"} loading={loading} onPress={() => onQuizFinish()} />}
      </View>
    </View>
  );
}
