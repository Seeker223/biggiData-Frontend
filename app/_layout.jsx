import 'nativewind'
import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import '../global.css'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayOut = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    });

    useEffect(() => {
      if(error) throw error;

      if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

      if(!fontsLoaded && !error) return null;

  return (
    <>
    <Stack >
        <Stack.Screen name='index'  
        options={{ headerShown: "false" }}/>
    </Stack>
    <Text>Header</Text>

    </>
  )
}

export default RootLayOut 

