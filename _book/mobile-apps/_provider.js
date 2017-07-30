import React from 'react'
import { store } from 'common'
import { Provider } from 'react-redux'
import { View } from 'react-native'

const ProviderComponent = (props) => (
  <Provider store={store()}>
    <View>{props.children}</View>
  </Provider>
)

export default ProviderComponent
