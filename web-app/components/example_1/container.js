import { connect } from 'react-redux'
import { actions } from '../../../common'
import Component from './component'

const mapStateToProps = (state) => ({
  value: 'test'
})

const mapDispatchToProps = (dispatch) => {
  console.log(actions);
  return {
    test: 'eadzs'
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
