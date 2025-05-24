import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import * as Progress from 'react-native-progress';
import Colors from '../../constants/Colors';

export default function Flashcards() {
  const { courseParams, chapterIndex, subsectionIndex } = useLocalSearchParams();
  const course = JSON.parse(courseParams);
  const flashcards = course?.chapters?.[parseInt(chapterIndex)]?.subsections?.[parseInt(subsectionIndex)]?.flashcards?.flatMap(fc => fc.cards) || [];
  const subsectionTitle = course?.chapters?.[parseInt(chapterIndex)]?.subsections?.[parseInt(subsectionIndex)]?.name;
  const courseTitle = course?.title;
  const [currentPage, setCurrentPage] = useState(0);
  const width = Dimensions.get('screen').width;
  const router = useRouter();
  const flatListRef = useRef();

  const onScroll = (event) => {
    const index = Math.round(event?.nativeEvent?.contentOffset.x / width);
    setCurrentPage(index);
  }

  const GetProgress = (currentPage) => {
    const per = currentPage / flashcards?.length;
    return per;
  }

  return (
    <View style={{ paddingTop: Platform.OS == 'ios' && 55 }}>
      <Image source={require('./../../assets/images/gradient.png')} style={{ height: 800, width: '100%' }} />

      <View style={{ position: 'absolute', top: 70, left: 20, width: '90%' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={30} color={Colors.WHITE} />
          </Pressable>
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 25, color: Colors.WHITE }}>{currentPage + 1} din {flashcards?.length}</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ color: Colors.WHITE, fontSize: 20, fontFamily: 'outfit-bold' }}>{subsectionTitle}</Text>
          <Text style={{ color: Colors.WHITE, fontSize: 16, fontFamily: 'outfit' }}>{courseTitle}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Progress.Bar progress={GetProgress(currentPage)} width={Dimensions.get('window').width * 0.85} color={Colors.WHITE} height={10} borderRadius={10} />
        </View>

        <FlatList
          ref={flatListRef}
          data={flashcards}
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key={index} style={{ height: 500, width: width * 0.9, marginTop: 60 }}>
              <FlipCard style={styles.flipCard}>
                <View style={styles.frontCard}>
                  <Text style={{ fontFamily: 'outfit-bold', fontSize: 28 }}>{item?.front}</Text>
                </View>
                <View style={styles.backCard}>
                  <Text style={{ width: Dimensions.get('window').width * 0.78, fontFamily: 'outfit', fontSize: 28, padding: 20, textAlign: 'center', color: Colors.WHITE }}>{item?.back}</Text>
                </View>
              </FlipCard>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  frontCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 20
  },
  backCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: Colors.DARK_BLUE,
    borderRadius: 20
  },
  flipCard: {
    width: Dimensions.get('screen').width * 0.78,
    height: 400,
    backgroundColor: Colors.WHITE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: Dimensions.get('screen').width * 0.06,
  }
});
