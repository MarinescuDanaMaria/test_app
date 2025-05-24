import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function QuestionAnswer() {
  const { courseParams, chapterIndex, subsectionIndex } = useLocalSearchParams();
  const course = JSON.parse(courseParams);

  const subsection =
    course?.chapters?.[parseInt(chapterIndex)]?.subsections?.[parseInt(subsectionIndex)];

  const qaList = subsection?.qa || [];
  const subsectionTitle = subsection?.name;
  const courseTitle = course?.title;

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const router = useRouter();

  const onQuestionSelect = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <View style={{ paddingTop: Platform.OS === 'ios' ? 55 : 0 }}>
      <Image
        source={require('./../../assets/images/gradient.png')}
        style={{ height: 800, width: '100%' }}
      />

      <View style={{ position: 'absolute', width: '100%', padding: 20, top: 60 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </Pressable>
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 28 }}>Întrebări și răspunsuri</Text>
        </View>

        <Text style={{ fontFamily: 'outfit-bold', fontSize: 20, marginTop: 10 }}>
          {subsectionTitle}
        </Text>
        <Text style={{ fontFamily: 'outfit', fontSize: 16, color: Colors.GRAY }}>
          {courseTitle}
        </Text>

        <FlatList
          data={qaList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Pressable style={styles.card} onPress={() => onQuestionSelect(index)}>
              <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>{item?.question}</Text>
              {selectedQuestion === index && (
                <Text
                  style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    marginTop: 10,
                    color: '#3F50CC',
                  }}
                >
                  R: {item?.answer}
                </Text>
              )}
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    marginTop: 15,
    borderRadius: 15,
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
});
