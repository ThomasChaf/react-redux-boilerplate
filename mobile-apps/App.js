import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Example1 from 'example_1/container'
import Example2 from 'example_2/container'
import ReduxProvider from './_provider'

const style = StyleSheet.create({
  main: {
    top: 30,
    left: 10
  }
})

const HomePageComponent = () => {
  return (
    <ReduxProvider>
      <View style={style.main}>
        <Text>Hello world !</Text>
        <Example1 />
        <Example2 />
      </View>
    </ReduxProvider>
  )
}

export default HomePageComponent
