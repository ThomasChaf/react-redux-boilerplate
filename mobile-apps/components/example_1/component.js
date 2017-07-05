import React from 'react'
import { Text, View } from 'react-native'

const Example1Component = (props) => {

  return (
    <View>
      <Text>Component 1</Text>
      {/* <button onClick={props.action_1}>Action 1</button> */}
      <Text>{props.clicked ? 'Button already been clicked' : 'Button has never been clicked'}</Text>
    </View>
  )
}

export default Example1Component
