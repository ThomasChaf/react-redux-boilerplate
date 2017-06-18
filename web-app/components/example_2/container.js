import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { actions } from 'common'
import Component from './component'

const mapStateToProps = (state) => ({
  humans: state.example.example_2.humans
})

const mapDispatchToProps = (dispatch) => ({
  action_2: (values) => {
    dispatch(actions.example.action_2(values))
    dispatch(reset('example'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
