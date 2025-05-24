import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Image, Platform, Pressable, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import { imageAssets } from '../../constants/Option';
import Button from './../../components/Shared/Button';

export default function Intro({ course }) {
  const router = useRouter();

  const imageSource = imageAssets[course?.banner_image] || require('../../assets/images/banner2.png');
  const chapterCount = course?.chapters?.length || 0;

  return (
    <View>
      <Image
        source={imageSource}
        style={{
          width: '100%',
          height: 230,
          resizeMode: 'cover',
        }}
      />

      <View style={{ padding: 20 }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>
          {course?.courseTitle || 'Titlu curs'}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            marginTop: 5,
          }}
        >
          <Ionicons name="book-outline" size={20} color={Colors.DARK_BLUE} />
          <Text
            style={{
              fontFamily: 'outfit',
              fontSize: 18,
              color: Colors.DARK_BLUE,
            }}
          >
            {chapterCount} Capitole
          </Text>
        </View>

        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 20,
            marginTop: 10,
          }}
        >
          Descriere:
        </Text>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.GRAY,
          }}
        >
          {course?.description || 'Nu există descriere pentru acest curs.'}
        </Text>

        <Button
          text={'Începe acum'}
          onPress={() => {
            if (chapterCount > 0) {
              router.push({
                pathname: '/chapterView',
                params: {
                  chapterParams: JSON.stringify(course.chapters[0]),
                  docId: course?.docId,
                  chapterIndex: 0,
                },
              });
            }
          }}
        />
      </View>

      <Pressable
        style={{
          position: 'absolute',
          padding: 10,
          top: Platform.OS === 'ios' ? 60 : 30,
          left: 10,
        }}
        onPress={() => router.replace('/(tabs)/home')}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
      </Pressable>
    </View>
  );
}
