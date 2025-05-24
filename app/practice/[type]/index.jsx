import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Platform, Pressable, Text, View } from 'react-native';
import CourseListGrid from '../../../components/PracticeScreen/CourseListGrid';
import { db } from '../../../config/firebaseConfig';
import Colors from '../../../constants/Colors';
import { PracticeOption } from '../../../constants/Option';

export default function PracticeTypeHomeScreen() {
  const { type } = useLocalSearchParams();
  const router = useRouter();
  const option = PracticeOption.find((item) => item.name === type);
  const [loading, setLoading] = useState(false);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    GetCourseList();
  }, []);

  const GetCourseList = async () => {
    setLoading(true);
    setCourseList([]);
    try {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        data.docId = docSnap.id; 
        setCourseList((prev) => [...prev, data]);
      });
    } catch (e) {
      console.log('Eroare la obținerea cursurilor:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ paddingTop: Platform.OS === 'ios' ? 55 : 0 }}>
      <Image source={option.image} style={{ height: 200, width: '100%' }} />

      <Pressable onPress={() => router.back()} style={{ position: 'absolute', top: 70, left: 20 }}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </Pressable>

      <Text style={{ fontFamily: 'outfit-bold', fontSize: 32, alignSelf: 'center', padding: 15 }}>
        {type}
      </Text>

      {loading && (
        <ActivityIndicator size="large" color={Colors.DARK_BLUE} style={{ marginTop: 130 }} />
      )}

      <CourseListGrid courseList={courseList} option={option} />
    </View>
  );
}
