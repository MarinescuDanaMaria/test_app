import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { UserDetailContext } from './../context/UserDetailContext';

export default function RootLayout() {

  const [loaded,error]=useFonts({
    'poppins':require('.//../assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold':require('.//../assets/fonts/Poppins-Bold.ttf'),
    'poppins-medium':require('.//../assets/fonts/Poppins-Medium.ttf'),
    'poppins-semiBold':require('.//../assets/fonts/Poppins-SemiBold.ttf'),
    'outfit':require('.//../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('.//../assets/fonts/Outfit-Bold.ttf'),
  })


  const [userDetail,setUserDetail]=useState();
  useEffect(() => {
    //console.log("User detail updated in context:", userDetail);
  }, [userDetail]);
  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>  
    <Stack screenOptions={{
      headerShown:false
    }}>
      
    </Stack>
    </UserDetailContext.Provider> 
  );
}
