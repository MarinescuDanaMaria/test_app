import { useLocalSearchParams, useRouter } from 'expo-router';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Button from '../../components/Shared/Button';
import { db } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';

export default function ChapterView() {
  const { chapterParams, docId, chapterIndex } = useLocalSearchParams();
  const chapter = JSON.parse(chapterParams);
  const [currentPage, setCurrentPage] = useState(0);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const GetProgress = () => {
    const total = chapter?.subsections?.length || 1;
    return currentPage / total;
  };

  const onChapterComplete = async () => {
    setLoader(true);
    await updateDoc(doc(db, 'courses', docId), {
      completedChapter: arrayUnion(chapterIndex),
    });
    setLoader(false);
    router.replace('/courseView/' + docId);
  };

  const subsection = chapter?.subsections?.[currentPage];

  return (
    <ScrollView  style={styles.container}>
      <Progress.Bar
        progress={GetProgress()}
        width={Dimensions.get('screen').width * 0.85}
      />

      <View style={styles.content}>
        <Text style={styles.topic}>{subsection?.name}</Text>
        <Text style={styles.explain}>{subsection?.content}</Text>

        {subsection?.code && (
          <Text style={[styles.codeExampleText, styles.codeDark]}>
            {subsection.code}
          </Text>
        )}
        {subsection?.example && (
          <Text style={styles.codeExampleText}>{subsection.example}</Text>
        )}

        <View style={{ marginTop: 25 }}>
          {currentPage < (chapter?.subsections?.length || 0) - 1 ? (
            <Button text="Înainte" onPress={() => setCurrentPage(currentPage + 1)} />
          ) : (
            <Button text="Finalizează" onPress={onChapterComplete} loading={loader} />
          )}
        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: Platform.OS === 'ios' ? 55 : 25,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  content: {
    marginTop: 20,
  },
  topic: {
    fontFamily: 'outfit-bold',
    fontSize: 25,
    color: 'black',
  },
  explain: {
    fontFamily: 'outfit',
    fontSize: 20,
    marginTop: 7,
    color: 'black',
  },
  codeExampleText: {
    padding: 15,
    backgroundColor: Colors.BG_GRAY,
    borderRadius: 15,
    fontFamily: 'outfit',
    fontSize: 18,
    marginTop: 15,
    color: 'black',
  },
  codeDark: {
    backgroundColor: '#1D1D1D',
    color: Colors.WHITE,
  },
});
