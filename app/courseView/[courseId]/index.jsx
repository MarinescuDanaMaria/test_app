import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Platform, View } from 'react-native';
import Chapters from '../../../components/CourseView/Chapters';
import Intro from '../../../components/CourseView/Intro';
import { db } from '../../../config/firebaseConfig';
import Colors from '../../../constants/Colors';


export default function CourseView() {
  const { courseId } = useLocalSearchParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (courseId) {
      GetCourseById();
    }
  }, [courseId]);

  const GetCourseById = async () => {
  try {
    const docRef = await getDoc(doc(db, 'courses', courseId));
    if (docRef.exists()) {
      setCourse({ ...docRef.data(), docId: courseId }); // ✅ include docId
    } else {
      console.warn('Cursul nu a fost găsit!');
    }
  } catch (error) {
    console.error('Eroare la obținerea cursului:', error.message);
  } finally {
    setLoading(false);
  }
};


  if (loading || !course) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.WHITE }}>
        <ActivityIndicator size="large" color={Colors.GRAY} />
      </View>
    );
  }

  return (
    <FlatList
      data={[]} // pentru a activa ListHeaderComponent
      ListHeaderComponent={
        <View
          style={{
            paddingTop: Platform.OS === 'ios' ? 55 : 25,
            flex: 1,
            backgroundColor: Colors.WHITE,
          }}
        >
          <Intro course={course} />
          <Chapters course={course} />
        </View>
      }
    />
  );
}
