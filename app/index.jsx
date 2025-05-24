import { UserDetailContext } from '@/context/UserDetailContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from '../constants/Colors';
import { auth, db } from './../config/firebaseConfig';

export default function Index() {
  const router = useRouter();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if(user) {
        const result = await getDoc(doc(db, "users", user.uid));
        const userData = result.data();
        
        // Check if user leveled up
        const oldLevel = userDetail?.level || 0;
        const newLevel = Math.floor((userData.points || 0) / 100) + 1;
        
        if (oldLevel && newLevel > oldLevel) {
          setShowLevelUp(true);
          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.delay(3000),
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }),
          ]).start(() => setShowLevelUp(false));
        }
        
        setUserDetail(userData);
        router.replace('/(tabs)/home');
      }
    });
  }, []);

  return (
    <LinearGradient
      colors={['#0f172a', '#1e3a8a', '#60a5fa']}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require('./../assets/images/img1.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', '#0f172a']}
          style={styles.imageOverlay}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bine ai venit!</Text>
        <Text style={styles.subtitle}>
          Stăpânește arta securității digitale și rămâi cu un pas înaintea hackerilor!
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/auth/signUp')}
          style={styles.primaryButton}
        >
          <Text style={styles.buttonText}>Începe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/auth/signIn')}
          style={styles.secondaryButton}
        >
          <Text style={[styles.buttonText, { color: Colors.WHITE }]}>
            Ai deja cont?
          </Text>
        </TouchableOpacity>
      </View>

      {showLevelUp && (
        <Animated.View style={[styles.levelUpNotification, { opacity: fadeAnim }]}>
          <Text style={styles.levelUpText}>
            Felicitări! Ai avansat la nivelul {Math.floor((userDetail?.points || 0) / 100) + 1}!
          </Text>
        </Animated.View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    height: 400,
    marginTop: 70,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  contentContainer: {
    padding: 25,
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: 'outfit',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: 'outfit',
    lineHeight: 28,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  primaryButton: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    marginTop: 20,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  secondaryButton: {
    padding: 15,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'outfit',
    fontWeight: 'bold',
  },
  levelUpNotification: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    backgroundColor: Colors.SUCCESS,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  levelUpText: {
    color: Colors.WHITE,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'outfit-bold',
  },
});