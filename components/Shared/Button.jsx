import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import Colors from './../../constants/Colors'


export default function Button({text,type="fill",onPress,loading})
 {
  return (
    <TouchableOpacity onPress={onPress} style={{
        padding:15,
        width:'100%',
        borderRadius:15,
        borderWidth:1.5,
        borderColor:Colors.DARK_BLUE,
        marginTop:20,
        backgroundColor:type=='fill'?Colors.DARK_BLUE:null
    }}
    disabled={loading}>
       {!loading ? <Text style={{
        textAlign:'center',
        // fontFamily:'outfit-regular',
        fontWeight:'bold',
        fontSize:18,
        color:type=='fill'?Colors.WHITE:Colors.DARK_BLUE
      }}>{text}</Text>:
      <ActivityIndicator size={'small'} color={type=='fill'?Colors.WHITE:Colors.DARK_BLUE}/>
       }
      </TouchableOpacity>
  )
}