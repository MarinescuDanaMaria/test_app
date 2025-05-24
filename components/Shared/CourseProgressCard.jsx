import { Image, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Colors from '../../constants/Colors';
import { imageAssets } from '../../constants/Option';

export default function CourseProgressCard({ item, width = 270 }) {
  const GetCompletedChapters = (course) => {
    const completed = Array.isArray(course?.completedChapter) ? course.completedChapter.length : 0;
    const total = course?.chapters?.length || 0;
    if (total === 0) return 0;
    return completed / total;
  };

  return (
    <View
      style={{
        margin: 7,
        padding: 15,
        backgroundColor: Colors.BG_GRAY,
        borderRadius: 15,
        width: width,
        height:140
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: 8,
        }}
      >
        <Image
          source={imageAssets[item?.banner_image]}
          style={{
            width: 80,
            height: 80,
            borderRadius: 8,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: 'outfit-bold',
              fontSize: 19,
              maxWidth: 230,
              color: 'black',
            }}
          >
            {item?.title}
          </Text>
          <Text
            style={{
              fontFamily: 'outfit',
              fontSize: 15,
              color: 'black',
            }}
          >
            {item?.chapters?.length || 0} Capitole
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <Progress.Bar
          progress={GetCompletedChapters(item)}
          width={width - 30}
          color={Colors.PRIMARY}
          unfilledColor="#eee"
          borderRadius={10}
        />
        <Text
          style={{
            fontFamily: 'outfit',
            marginTop: 4,
            fontSize: 14,
            color: 'black',
          }}
        >
          {(item?.completedChapter?.length || 0)} din {item?.chapters?.length || 0} capitole complete
        </Text>
      </View>
    </View>
  );
}
