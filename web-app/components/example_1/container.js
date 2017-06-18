import { connect } from 'react-redux'
import { actions } from 'common'
import Component from './component'

const mapStateToProps = (state) => {
  console.log('======= STATE ======');
  console.log(state)
  return {
    clicked: state.example.example_1.clicked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action_1: () => {
      console.log('JE CALL EXEMPLA AC 1');
      dispatch(actions.example.action_1())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
