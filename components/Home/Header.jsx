import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { UserDetailContext } from './../../context/UserDetailContext';

export default function Header() {
  const {userDetail,setUserDetail}=useContext(UserDetailContext)
  //console.log(userDetail)
  return (
    <View style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal: 20,
       marginTop:10,
    }}>
      <View>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:28
      }}>Bună, {userDetail?.name}</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:18
      }}>Hai să începem !</Text>
      </View>
      <TouchableOpacity>
       <Ionicons name="settings-outline" size={32} color="black"></Ionicons>
      </TouchableOpacity>
      
    </View>
  )
}