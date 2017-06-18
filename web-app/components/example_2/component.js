import React from 'react'
import Form from './form'

const Example2Component = (props) => (
  <div>
    <p>Component 2</p>
    <Form onSubmit={props.action_2} />
    {
      props.humans.map((human, key) => (<span key={key}>{human.name}<br /></span>))
    }
  </div>
)

export default Example2Component
