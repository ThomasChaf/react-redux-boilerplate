import { connect } from 'react-redux'
import { actions } from 'common'
import Component from './component'

const mapStateToProps = (state) => ({
  clicked: state.example.example_1.clicked
})

const mapDispatchToProps = (dispatch) => ({
  action_1: () => dispatch(actions.example.action_1())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
