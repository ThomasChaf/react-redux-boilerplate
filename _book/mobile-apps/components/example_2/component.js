import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Form from './form'

const Example2Component = (props) => (
  <View>
    <Text>Component 2</Text>
    <Form onSubmit={props.action_2} />
    {
      props.humans.map((human, key) => (<Text key={key}>{human.name}></Text>))
    }
  </View>
)

export default Example2Component
