import { FlatList, Text, View } from 'react-native';
import CourseProgressCard from '../Shared/CourseProgressCard';
import { useContext } from 'react';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function CourseProgress({ courseList }) {
  const { userDetail } = useContext(UserDetailContext);

  // Filter courses that the user has started
  const startedCourses = courseList.filter(course => 
    userDetail?.startedCourses?.[course.docId]?.completedChapters?.length > 0
  );

  if (startedCourses.length === 0) {
    return (
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 25,
            color: 'black',
            marginBottom: 6,
          }}
        >
          Progres
        </Text>
        <Text style={{ fontFamily: 'outfit', fontSize: 16, color: 'gray' }}>
          Nu ai început niciun curs încă.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 25,
          color: 'black',
          marginBottom: 6,
        }}
      >
        Progres
      </Text>

      <FlatList
        data={startedCourses}
        keyExtractor={(item) => item.docId}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginRight: 10 }}>
            <CourseProgressCard item={item} />
          </View>
        )}
      />
    </View>
  );
}