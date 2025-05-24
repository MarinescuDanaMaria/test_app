import { UserDetailContext } from '@/context/UserDetailContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from '../constants/Colors';
import { auth, db } from './../config/firebaseConfig';

export default function Index() {
  const router = useRouter();

   const {userDetail,setUserDetail}=useContext(UserDetailContext); 


  onAuthStateChanged(auth, async(user) => 
  {
    if(user)
    {
      const result = await getDoc(doc(db, "users", user.uid));

      setUserDetail(result.data());
      router.replace('/(tabs)/home');
      
    }
  })

  return (
    <LinearGradient
      colors={['#0f172a','#1e3a8a', '#60a5fa']} 
      style={{ flex: 1 }}
    >
    <View style={{ position: 'relative' }}>
  <Image
    source={require('./../assets/images/img1.jpg')}
    style={{
      width: '100%',
      height: 400,
      marginTop: 70,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    }}
    resizeMode="cover"
  />
  <LinearGradient
    colors={['transparent', '#0f172a']}
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 80,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    }}
  />
</View>

      <View
        style={{
          padding: 25,
          flex: 1,
        }}
      >
        <Text style={{
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
          fontFamily: 'outfit'
        }}>
          Bine ai venit !
        </Text>

        <Text style={{
          fontSize: 20,
          marginTop: 20,
          textAlign: 'center',
          color: 'white',
          fontFamily: 'outfit'
        }}>
          Stăpânește arta securității digitale și rămâi cu un pas înaintea hackerilor!
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/auth/signUp')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Începe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/auth/signIn')}
          style={[styles.button, {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: Colors.WHITE,
          }]}
        >
          <Text style={[styles.buttonText, { color: Colors.WHITE }]}>Ai deja cont?</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor:"#1e3a8a",
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'outfit',
  }
});
