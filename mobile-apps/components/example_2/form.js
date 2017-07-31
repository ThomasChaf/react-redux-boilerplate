import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { reduxForm, Field } from 'redux-form'

const renderInput = ({ input: { onChange, ...restInput }, ...props}) => {
  return <TextInput style={{height: 20}} onChangeText={onChange} {...restInput} {...props} />
}

const FormComponent = (props) => (
  <View>
    <TextInput
      name="name"
      component={renderInput}
      placeholder="Type here" />
    <TextInput
      name="birthday"
      component={renderInput}
      type="date" />
    <TouchableOpacity onPress={props.handleSubmit}>
      <Text>Add</Text>
    </TouchableOpacity>
  </View>
)

export default FormComponent
