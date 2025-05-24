import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { db } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';
import { imageAssets } from '../../constants/Option';

export default function Explore() {
  const router = useRouter();
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'courses'));
        const courseData = snapshot.docs.map(doc => ({
          ...doc.data(),
          docId: doc.id
        }));
        setAllCourses(courseData);
      } catch (err) {
        console.log('Eroare la preluarea cursurilor:', err);
      }
    };

    fetchAllCourses();
  }, []);

  const onCourseSelect = (course) => {
    router.push({
      pathname: '/courseView/' + course?.docId,
      params: {
        courseParams: JSON.stringify(course)
      }
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/gradient.png')}
      style={{ flex: 1, resizeMode: 'cover', padding: 25 }}>

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 28,
        marginBottom: 20,
        marginTop: 28
      }}>
        Explorează mai multe cursuri
      </Text>

      <FlatList
        data={allCourses}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onCourseSelect(item)}
            style={{
              backgroundColor: Colors.WHITE,
              borderRadius: 25,
              padding: 15,
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4,
              minHeight: 120
            }}>

            <Image
              source={imageAssets[item?.banner_image]}
              style={{
                width: 80,
                height: 80,
                resizeMode: 'cover',
                borderRadius: 15,
                marginRight: 15
              }}
            />

            <View style={{ flexShrink: 1 }}>
              <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 18,
                marginBottom: 5,
                color: Colors.DARK
              }}>{item.title}</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Ionicons name="book-outline" size={16} color={Colors.GRAY} style={{ marginRight: 4 }} />
                <Text style={{
                  fontFamily: 'outfit',
                  fontSize: 14,
                  color: Colors.GRAY
                }}>{item?.chapters?.length || 0} capitole • Apasă pentru a începe</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}
