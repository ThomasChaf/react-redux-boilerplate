import React from 'react'

const Example1Component = (props) => {

  return (
    <div>
      <p>Component 1</p>
      <button onClick={props.action_1}>Action 1</button>
      <span>{props.clicked ? 'Button already been clicked' : 'Button has never been clicked'}</span>
    </div>
  )
}

export default Example1Component
