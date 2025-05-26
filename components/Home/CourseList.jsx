import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';
import { imageAssets } from '../../constants/Option';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function CourseList({ courseList }) {
  const router = useRouter();
  const { userDetail } = useContext(UserDetailContext);

  // Filter courses that the user has started
  const startedCourses = courseList.filter(course => 
    userDetail?.startedCourses?.[course.docId]?.completedChapters?.length > 0
  );

  if (startedCourses.length === 0) {
    return (
      <View>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 25, color: 'black', marginBottom: 2 }}>Cursuri</Text>
        <Text style={{ fontFamily: 'outfit', fontSize: 16, color: 'gray' }}>
          Niciun curs început încă. Explorează pentru a începe unul!
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 25, color: 'black', marginBottom: 2 }}>Cursuri</Text>

      <FlatList
        data={startedCourses}
        horizontal
        keyExtractor={(item) => item.docId}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/courseView/' + item?.docId,
                params: {
                  courseParams: JSON.stringify(item),
                },
              })
            }
            style={styles.courseContainer}
          >
            <Image
              source={imageAssets[item.banner_image]}
              style={styles.image}
            />

            <Text style={styles.title}>{item?.title}</Text>

            <View style={styles.chapterRow}>
              <Ionicons name="book-outline" size={20} color="black" />
              <Text style={styles.chapterText}>
                {userDetail?.startedCourses?.[item.docId]?.completedChapters?.length || 0} din {item?.chapters?.length || 0} capitole
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  courseContainer: {
    padding: 10,
    backgroundColor: Colors.BG_GRAY,
    margin: 6,
    borderRadius: 15,
    width: 250,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 18,
    marginTop: 10,
    maxWidth: 230,
    color: 'black',
  },
  chapterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  chapterText: {
    fontFamily: 'outfit',
    marginLeft: 5,
    color: 'black',
  },
});