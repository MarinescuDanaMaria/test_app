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
      style={{ flex: 1, resizeMode: 'cover' }}>
      <View style={{ padding: 25, paddingTop: 45 }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 32,
          marginBottom: 15,
          color: Colors.WHITE,
          textShadowColor: 'rgba(0, 0, 0, 0.2)',
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 4,
        }}>
          Explorează Cursuri
        </Text>
        
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 16,
          marginBottom: 20,
          color: Colors.WHITE,
          opacity: 0.9
        }}>
          Descoperă noi oportunități de învățare în securitate cibernetică
        </Text>

        <Image
          source={{ uri: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg" }}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 20,
            marginBottom: 25,
            resizeMode: 'cover'
          }}
        />

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
                marginBottom: 20,
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }}>
              <Image
                source={imageAssets[item?.banner_image]}
                style={{
                  width: '100%',
                  height: 160,
                  resizeMode: 'cover',
                }}
              />
              
              <View style={{ padding: 20 }}>
                <Text style={{
                  fontFamily: 'outfit-bold',
                  fontSize: 22,
                  marginBottom: 8,
                  color: Colors.DARK
                }}>{item.title}</Text>

                <Text style={{
                  fontFamily: 'outfit',
                  fontSize: 14,
                  color: Colors.GRAY,
                  marginBottom: 12,
                  lineHeight: 20,
                }} numberOfLines={2}>
                  {item.description}
                </Text>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="book-outline" size={18} color={Colors.PRIMARY} />
                    <Text style={{
                      fontFamily: 'outfit',
                      fontSize: 14,
                      color: Colors.PRIMARY,
                      marginLeft: 6
                    }}>{item?.chapters?.length || 0} capitole</Text>
                  </View>
                  
                  <View style={{
                    backgroundColor: Colors.PRIMARY,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 20,
                  }}>
                    <Text style={{
                      fontFamily: 'outfit-bold',
                      fontSize: 12,
                      color: Colors.WHITE
                    }}>ÎNCEPE ACUM</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}