import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

const Example1Component = (props) => {

  return (
    <View>
      <Text>Component 1</Text>
      <TouchableHighlight onPress={props.action_1}>
        <Text>Action 1</Text>
      </TouchableHighlight>
      <Text>{props.clicked ? 'Button already been clicked' : 'Button has never been clicked'}</Text>
    </View>
  )
}

export default Example1Component
