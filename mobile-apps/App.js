import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const style = StyleSheet.create({
  main: {
    top: 30,
    left: 10
  }
})

const HomePageComponent = () => {
  return (
    <View style={style.main}>
      <Text>Hello world</Text>
    </View>
  )
}

export default HomePageComponent
