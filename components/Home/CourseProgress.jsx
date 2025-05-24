// import { FlatList, Text, View } from 'react-native';
// import CourseProgressCard from '../Shared/CourseProgressCard';

// export default function CourseProgress({ courseList }) {
//   return (
//     <View style={{ marginTop: 10 }}>
//       <Text
//         style={{
//           fontFamily: 'outfit-bold',
//           fontSize: 25,
//           color: 'black',
//           marginBottom: 6,
//         }}
//       >
//         Progres
//       </Text>

//       <FlatList
//         data={courseList}
//         keyExtractor={(item, index) => item.docId || index.toString()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={{ marginRight: 10 }}>
//             <CourseProgressCard item={item} />
//           </View>
//         )}
//       />
//     </View>
//   );
// }

import { FlatList, Text, View } from 'react-native';
import CourseProgressCard from '../Shared/CourseProgressCard';

export default function CourseProgress({ courseList }) {
  // Filtrare cursuri începute (cu capitole completate)
  const startedCourses = courseList.filter(course => {
    const hasCompleted = Array.isArray(course?.completedChapter) && course.completedChapter.length > 0;
    return hasCompleted;
  });

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
        keyExtractor={(item, index) => item.docId || index.toString()}
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
