import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Shared/Button';
import { db } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function QuizSummary() {
  const { quizResultParam, courseParams } = useLocalSearchParams();
  const quizResult = JSON.parse(quizResultParam);
  const course = courseParams ? JSON.parse(courseParams) : null;
  const [correctAns, setCorrectAns] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  useEffect(() => {
    quizResult && CalculateResult();
  }, [quizResult]);

  const CalculateResult = () => {
    if (quizResult !== undefined) {
      const correctAns_ = Object.entries(quizResult)
        ?.filter(([key, value]) => value?.isCorrectquiz == true);
      const totalQues_ = Object.keys(quizResult).length;
      const pointPerQuestion = 100 / totalQues_;

      setCorrectAns(correctAns_.length);
      setTotalQuestion(totalQues_);
      setTotalPoints((correctAns_.length * pointPerQuestion).toFixed(0));
    }
  };

  const updateUserProgress = async () => {
    if (!userDetail?.uid) return;
    
    setLoading(true);
    try {
      const userRef = doc(db, "users", userDetail.uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      
      // Calculate new points
      const earnedPoints = parseInt(totalPoints);
      const newTotalPoints = (userData.points || 0) + earnedPoints;
      
      // Calculate new level
      const newLevel = Math.floor(newTotalPoints / 100) + 1;
      
      // Determine rank based on level
      let newRank = userData.rank;
      if (newLevel >= 15) {
        newRank = "Expert";
      } else if (newLevel >= 10) {
        newRank = "Advanced";
      } else if (newLevel >= 5) {
        newRank = "Intermediate";
      }

      // Update completed quizzes
      const completedQuizzes = { ...userData.completedQuizzes };
      if (course?.docId) {
        if (!completedQuizzes[course.docId]) {
          completedQuizzes[course.docId] = [];
        }
        if (!completedQuizzes[course.docId].includes(quizResult)) {
          completedQuizzes[course.docId].push(quizResult);
        }
      }

      // Check if course is completed to award badge
      let newBadges = [...(userData.badges || [])];
      if (course?.docId && !userData.badges?.includes(course.title)) {
        const isCompleted = completedQuizzes[course.docId]?.length >= (course.quiz?.length || 0);
        if (isCompleted && !userData.completedCourses.includes(course.docId)) {
          newBadges.push(course.title);
          
          // Unlock next course if available
          const unlockedCourses = [...(userData.unlockedCourses || [])];
          if (course.title === "Introducere în securitate") {
            !unlockedCourses.includes("Atacuri comune") && unlockedCourses.push("Atacuri comune");
          } else if (course.title === "Atacuri comune") {
            !unlockedCourses.includes("Apărare și prevenție") && unlockedCourses.push("Apărare și prevenție");
          } else if (course.title === "Apărare și prevenție") {
            !unlockedCourses.includes("Cazuri reale") && unlockedCourses.push("Cazuri reale");
          }
          
          await updateDoc(userRef, {
            completedCourses: [...userData.completedCourses, course.docId],
            unlockedCourses
          });
        }
      }

      // Update user data
      const updatedData = {
        points: newTotalPoints,
        level: newLevel,
        rank: newRank,
        completedQuizzes,
        badges: newBadges
      };

      await updateDoc(userRef, updatedData);
      setUserDetail({ ...userDetail, ...updatedData });
    } catch (error) {
      console.error("Error updating user progress:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={require('./../../assets/images/gradient.png')} style={{ height: 800, width: '100%', position: 'absolute' }} />

      <View style={{
        padding: 35,
        paddingTop: Platform.OS == 'ios' ? 55 : 35,
        flex: 1
      }}>
        <Text style={{
          textAlign: 'center',
          fontFamily: 'outfit-bold',
          fontSize: 30,
          color: Colors.WHITE
        }}>Sumar Quiz</Text>

        <View style={{
          backgroundColor: Colors.WHITE,
          padding: 20,
          borderRadius: 20,
          marginTop: 60,
          display: 'flex',
          alignItems: 'center'
        }}>
          <Image source={require('./../../assets/images/trophy.png')} style={{
            width: 100,
            height: 100,
            marginTop: -60
          }} />
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 26
          }}>{totalPoints > 60 ? 'Felicitări!' : 'Încearcă din nou!'}</Text>

          <Text style={{
            fontFamily: 'outfit',
            color: Colors.GRAY,
            marginTop: 8,
            fontSize: 17
          }}>Ai obținut {totalPoints} din 100 puncte.</Text>

          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
          }}>
            <View style={styles.resultTextContainer}>
              <Text style={[styles.resultText, { marginTop: 3 }]}> Q: {totalQuestion} </Text>
            </View>
            <View style={styles.resultTextContainer}>
              <Text style={styles.resultText}> ✅ {correctAns}</Text>
            </View>
            <View style={styles.resultTextContainer}>
              <Text style={styles.resultText}> ❌ {totalQuestion - correctAns}</Text>
            </View>
          </View>
        </View>

        <Button 
          text={'Finalizează'} 
          onPress={async () => {
            await updateUserProgress();
            router.replace('/(tabs)/home');
          }}
          loading={loading}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resultTextContainer: {
    marginHorizontal: 10,
  },
  resultText: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.GRAY
  }
});
