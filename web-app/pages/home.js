import React from 'react'
import Example1 from 'example_1/container'
// import Example2 from '../components/example_2/container'
import BpProvider from './_provider'

const HomePageComponent = () => {
  return (
    <BpProvider>
      <h1>Hello world !</h1>
      <Example1 />
      {/* <Example2 /> */}
    </BpProvider>
  )
}

export default HomePageComponent
