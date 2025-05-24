import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { db } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function CourseRoadmap() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userDetail } = useContext(UserDetailContext);
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      const coursesData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        docId: doc.id
      }));
      setCourses(coursesData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const isCourseUnlocked = (courseTitle) => {
    return userDetail?.unlockedCourses?.includes(courseTitle);
  };

  const isCourseCompleted = (courseId) => {
    return userDetail?.completedCourses?.includes(courseId);
  };

  const getBadgeIcon = (courseTitle) => {
    if (userDetail?.badges?.includes(courseTitle)) {
      switch (courseTitle) {
        case "Introducere în securitate":
          return "shield-checkmark";
        case "Atacuri comune":
          return "warning";
        case "Apărare și prevenție":
          return "lock-closed";
        case "Cazuri reale":
          return "trophy";
        default:
          return "ribbon";
      }
    }
    return null;
  };

  const handleCoursePress = (course) => {
    if (isCourseUnlocked(course.title)) {
      router.push({
        pathname: "/courseView/" + course.docId,
      });
    } else {
      alert('Finalizează cursul anterior pentru a debloca acest curs.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Harta Cursurilor</Text>
        <Text style={styles.headerSubtitle}>Nivel {userDetail?.level || 1} • {userDetail?.rank}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(userDetail?.points % 100)}%` }]} />
        </View>
        <Text style={styles.pointsText}>{userDetail?.points || 0} puncte • {100 - (userDetail?.points % 100)} până la următorul nivel</Text>
      </View>

      <View style={styles.roadmapContainer}>
        <Svg height={courses.length * 200} width={screenWidth}>
          <Path
            d={`M${screenWidth/2} 0 ${courses.map((_, i) => 
              `Q${i % 2 ? screenWidth/2 + 50 : screenWidth/2 - 50} ${i * 200 + 100} ${screenWidth/2} ${(i + 1) * 200}`
            ).join(' ')}`}
            fill="none"
            stroke={Colors.PRIMARY}
            strokeWidth={3}
            strokeDasharray="8,8"
          />
        </Svg>

        {courses.map((course, index) => {
          const isUnlocked = isCourseUnlocked(course.title);
          const isCompleted = isCourseCompleted(course.docId);
          const badgeIcon = getBadgeIcon(course.title);
          const isLeft = index % 2 === 0;

          return (
            <View
              key={course.docId}
              style={[
                styles.courseNode,
                {
                  top: index * 200,
                  left: isLeft ? 20 : screenWidth - 220,
                }
              ]}
            >
              <TouchableOpacity
                style={[
                  styles.courseButton,
                  isCompleted ? styles.completed : isUnlocked ? styles.unlocked : styles.locked
                ]}
                onPress={() => handleCoursePress(course)}
                disabled={!isUnlocked}
              >
                <View style={styles.courseContent}>
                  <View style={styles.courseHeader}>
                    <Text style={styles.courseTitle}>{course.title}</Text>
                    {badgeIcon && (
                      <View style={styles.badgeContainer}>
                        <Ionicons name={badgeIcon} size={24} color={Colors.WHITE} />
                      </View>
                    )}
                  </View>
                  <Text style={styles.courseDescription} numberOfLines={2}>
                    {course.description}
                  </Text>
                  <View style={styles.courseStatus}>
                    <Ionicons
                      name={isCompleted ? "checkmark-circle" : isUnlocked ? "lock-open" : "lock-closed"}
                      size={24}
                      color={isCompleted ? Colors.GREEN : isUnlocked ? Colors.PRIMARY : Colors.GRAY}
                    />
                    <Text style={[styles.statusText, { color: isCompleted ? Colors.GREEN : isUnlocked ? Colors.PRIMARY : Colors.GRAY }]}>
                      {isCompleted ? "Completat" : isUnlocked ? "Deblocat" : "Blocat"}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: Colors.WHITE,
    minHeight: '100%',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 28,
    color: Colors.DARK,
    marginBottom: 10,
  },
  headerSubtitle: {
    fontFamily: 'outfit',
    fontSize: 18,
    color: Colors.GRAY,
    marginBottom: 15,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: Colors.BG_GRAY,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.PRIMARY,
  },
  pointsText: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: Colors.GRAY,
    marginTop: 8,
  },
  roadmapContainer: {
    position: 'relative',
    paddingBottom: 100,
  },
  courseNode: {
    position: 'absolute',
    width: 200,
  },
  courseButton: {
    borderRadius: 15,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  completed: {
    backgroundColor: Colors.GREEN,
  },
  unlocked: {
    backgroundColor: Colors.PRIMARY,
  },
  locked: {
    backgroundColor: Colors.GRAY,
  },
  courseContent: {
    gap: 8,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 16,
    color: Colors.WHITE,
    flex: 1,
  },
  badgeContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 5,
  },
  courseDescription: {
    fontFamily: 'outfit',
    fontSize: 12,
    color: Colors.WHITE,
    opacity: 0.9,
  },
  courseStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5,
  },
  statusText: {
    fontFamily: 'outfit',
    fontSize: 14,
  },
});
