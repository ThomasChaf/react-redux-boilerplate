import React from 'react'
import { reduxForm, Field } from 'redux-form'

const FormComponent = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      name="name"
      component="input"
      type="text"
      placeholder="Type here" />
    <br />
    <Field
      name="birthday"
      component="input"
      type="date" />
    <br />
    <button>Add</button>
  </form>
)

export default reduxForm({
  form: 'example'
})(FormComponent)
