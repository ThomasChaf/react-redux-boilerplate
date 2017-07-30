import React from 'react'
import Example1 from 'example_1/container'
import Example2 from 'example_2/container'
import ReduxProvider from './_provider'

const HomePageComponent = () => {
  return (
    <ReduxProvider>
      <h1>Hello world !</h1>
      <Example1 />
      <Example2 />
    </ReduxProvider>
  )
}

export default HomePageComponent
