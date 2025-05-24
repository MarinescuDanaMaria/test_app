import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function CourseListGrid({ courseList, option }) {
  const router = useRouter();

  const onPress = (course, extraParams) => {
    router.push({
      pathname: option.path,
      params: {
        courseParams: JSON.stringify(course),
        ...extraParams,
      },
    });
  };

  const dataKeyMap = {
    Quiz: 'quiz',
    Flashcards: 'flashcards',
    'Întrebări & Răspunsuri': 'qa',
  };

  const dataKey = dataKeyMap[option.name];
  let displayList = [];

  if (dataKey === 'quiz') {
    displayList = courseList.flatMap((course) =>
      (course.quiz || []).map((item, index) => ({
        title: item.title,
        courseTitle: course.title,
        course,
        extraParams: { quizIndex: index.toString() },
      }))
    );
  } else if (dataKey === 'flashcards' || dataKey === 'qa') {
    displayList = courseList.flatMap((course) =>
      course.chapters.flatMap((chapter, chapterIndex) =>
        chapter.subsections.flatMap((subsection, subsectionIndex) => {
          const items = subsection[dataKey] || [];
          return items.length > 0
            ? [{
                title: subsection.name,
                courseTitle: course.title,
                subsectionName: subsection.name,
                course,
                extraParams: {
                  chapterIndex: chapterIndex.toString(),
                  subsectionIndex: subsectionIndex.toString(),
                },
              }]
            : [];
        })
      )
    );
  }

  return (
    <View>
      <FlatList
        data={displayList}
        numColumns={2}
        style={{ padding: 20 }}
        contentContainerStyle={{ paddingBottom: 600 }}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(item.course, item.extraParams)}
            style={{
              flex: 1,
              backgroundColor: Colors.WHITE,
              margin: 7,
              borderRadius: 15,
              padding: 15,
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 180,
            }}
          >
            <Ionicons
              name="checkmark-circle"
              size={24}
              color={Colors.GRAY}
              style={{ position: 'absolute', top: 10, right: 20 }}
            />
            <Image
              source={option?.icon}
              style={{ width: '100%', height: 90, resizeMode: 'contain' }}
            />
            <Text
              style={{
                fontFamily: 'outfit',
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 7,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontFamily: 'outfit',
                textAlign: 'center',
                fontSize: 12,
                color: Colors.GRAY,
                marginTop: 3,
              }}
            >
              {item.courseTitle}
              {/* {item.subsectionName ? ` – ${item.subsectionName}` : ''} */}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
