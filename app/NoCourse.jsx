import { useRouter } from 'expo-router';
import { Image, SafeAreaView, Text } from 'react-native';
//import Button from '../Shared/Button';

import Button from '../components/Shared/Button';

export default function NoCourse() {
  const router=useRouter();
  return (
    <SafeAreaView style={{
        //paddingTop:Platform.OS=='ios' && 55,
        marginTop:60,
        display:'flex',
        alignItems:'center',
        paddingHorizontal: 20,
        //backgroundColor:Colors.BABY_BLUE, - nu merge 
    }}>
      <Image source={require('../assets/images/book.png')}
      style={{
        height:200,
        width:200
      }}/>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25,
        textAlign:'center',
        marginTop:15
      }}>Nu ai început nici o secțiune.</Text>

      <Button text={'Începe un curs'} onPress={()=>router.push('/addCourse')}/>
    </SafeAreaView>
  )
}

//  <Button text={'Vezi secțiunile existente'} type='outline'/>