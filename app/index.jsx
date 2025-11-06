import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {  Link  } from 'expo-router'
import React from 'react'           
import '../global.css'


const App = () => {
  return (
     <View className="flex-1 items-center justify-center bg-red-700">
      <Text className="text-3xl font-pblack">HAPpY COLDINGt bbfxg</Text>
      <StatusBar style="auto" />  
      <Link href='/profile' style={{color: 'blue'}}>
      Go to profile
      </Link>
    </View>
  )
}

export default App

