import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth, db } from '../../config/firebaseConfig';
import Colors from './../../constants/Colors';
import { UserDetailContext } from './../../context/UserDetailContext';

export default function SignUp() 
{
  const router=useRouter();
  const [fullName,setFullName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const {userDetail,setUserDetail}=useContext(UserDetailContext);


  const createAccount=()=>
    {
      createUserWithEmailAndPassword(auth,email,password)
      .then(async(response)=>{
        const user=response.user;
        await saveUser(user);
         Alert.alert('OK', 'Te-ai înregistrat cu succes!');
         router.replace('/NoCourse');
      })
      .catch(e=>{
        console.log(e.message)
      })
    
    }

  const saveUser=async(user)=>
  {
    const data={
      uid: user?.uid,  
      name: fullName,  
      email: email, 
      points: 0,
      level: 1,
      rank: "Newbie",
      avatar: "",
      completedCourses: [],
      completedQuizzes: {},
      badges: [],
      unlockedCourses: ["Introducere în securitate"], // First course is unlocked by default
      lastActive: new Date().toISOString(),
    }

    await setDoc(doc(db, "users", user.uid), data);
    setUserDetail(data);
  
  }

  return (
    <View style={
        {
            display:'flex',
            alignItems:'center',
            marginTop:85,
            padding:25,
            flex:1
        }
    }>
      <Image source={require('./../../assets/images/signIn2.jpg')}
      style={{
        width:300,
        height:300,
        borderRadius:20

      }}
      />

      <Text
      style={{
       fontSize:30,
       fontFamily:'outfit-bold',
       padding:20

      }}>Creează cont nou</Text>

      <TextInput placeholder='Nume și prenume' onChangeText={(value)=>setFullName(value)} style={styles.textInput} placeholderTextColor="gray"/>
      <TextInput placeholder='Email' onChangeText={(value)=>setEmail(value)} style={styles.textInput} placeholderTextColor="gray"/>
      <TextInput placeholder='Parolă' onChangeText={(value)=>setPassword(value)} secureTextEntry={true} style={styles.textInput} placeholderTextColor="gray"/>

      <TouchableOpacity 
      onPress={createAccount}
      style={{
        padding:15,
        backgroundColor:'#48CFCB', // sau 66D2CE
        width:'100%',
        marginTop:25,
        borderRadius:10
      }}>

        <Text
        style={{
          fontFamily:'outfit-bold',
          fontSize:20,
          textAlign:'center',
          color:Colors.WHITE,
        }}>Salvează</Text>
      </TouchableOpacity>

     <View style={{
      display:'flex',
      flexDirection:'row',gap:5,
      marginTop:20
     }}>
      <Text style={{fontFamily:'outfit'}}>Ai deja cont?</Text>
        <Pressable onPress={()=>router.push('/auth/signIn')}>
          <Text style={{color:'#48CFCB',fontFamily:'outfit-bold'}}>Apasă aici.</Text>
        </Pressable>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  textInput:
  {
    borderWidth:1,
    width:'100%',
    padding:15,
    fontSize:18,
    marginTop:20,
    borderRadius:8
  }
})