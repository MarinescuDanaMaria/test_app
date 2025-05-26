import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserDetailContext } from '../../context/UserDetailContext';
import Colors from '../../constants/Colors';

export default function Chapters({ course }) {
  const router = useRouter();
  const { userDetail } = useContext(UserDetailContext);

  const isChapterCompleted = (index) => {
    const courseProgress = userDetail?.startedCourses?.[course.docId];
    return courseProgress?.completedChapters?.includes(index.toString());
  };

  const renderChapter = ({ item, index }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/chapterView',
          params: {
            chapterParams: JSON.stringify(item),
            docId: course?.docId,
            chapterIndex: index,
          },
        })
      }
      style={styles.chapterCard}
    >
      <View style={styles.chapterContent}>
        <Text style={styles.chapterText} numberOfLines={2}>
          {index + 1}. {item?.title}
        </Text>
        {isChapterCompleted(index) ? (
          <Ionicons name="checkmark-circle" size={22} color={Colors.GREEN} />
        ) : (
          <Ionicons name="play" size={22} color={Colors.DARK_BLUE} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capitole</Text>
      <FlatList
        data={course?.chapters || []}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderChapter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 25,
    color: 'black',
  },
  chapterCard: {
    padding: 15,
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chapterContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  chapterText: {
    fontFamily: 'outfit',
    fontSize: 18,
    flexShrink: 1,
    color: 'black',
  },
});