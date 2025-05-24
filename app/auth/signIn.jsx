import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth, db } from './../../config/firebaseConfig';
import Colors from './../../constants/Colors';
import { UserDetailContext } from './../../context/UserDetailContext';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);

  const onSignInClick = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        const result = await getDoc(doc(db, 'users', auth.currentUser.uid));
        const userData = result.data();
        console.log(userData);
        setUserDetail(userData); 
        setLoading(false);
        Alert.alert('OK', 'Te-ai logat cu succes!');
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
        Alert.alert('Eroare', 'Email și parolă incorecte!');
      });
  };

  useEffect(() => {
    if (userDetail?.email) {
     router.replace('/(tabs)/home');
    }
  }, [userDetail]);

  return (
    <View style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: 85,
      padding: 25,
      flex: 1
    }}>
      <Image source={require('./../../assets/images/signIn2.jpg')}
        style={{
          width: 300,
          height: 300,
          borderRadius: 20
        }}
      />

      <Text style={{
        fontSize: 30,
        fontFamily: 'outfit-bold',
        padding: 20
      }}>Intră în cont</Text>

      <TextInput placeholder='Email'
        onChangeText={(value) => setEmail(value)}
        style={styles.textInput}
        placeholderTextColor="gray" />
      <TextInput placeholder='Parolă'
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
        style={styles.textInput}
        placeholderTextColor="gray" />

      <TouchableOpacity
        onPress={onSignInClick}
        disabled={loading}
        style={{
          padding: 15,
          backgroundColor: '#48CFCB',
          width: '100%',
          marginTop: 25,
          borderRadius: 10
        }}>
        {!loading ? (
          <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 20,
            textAlign: 'center',
            color: Colors.WHITE,
          }}>Salvează</Text>
        ) : (
          <ActivityIndicator size={'small'} color={Colors.WHITE} />
        )}
      </TouchableOpacity>

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginTop: 20
      }}>
        <Text style={{ fontFamily: 'outfit' }}>Nu ești înregistrat?</Text>
        <Pressable onPress={() => router.push('/auth/signUp')}>
          <Text style={{ color: '#48CFCB', fontFamily: 'outfit-bold' }}>Apasă aici.</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: '100%',
    padding: 15,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 8
  }
});
