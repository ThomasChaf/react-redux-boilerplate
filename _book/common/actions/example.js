import * as actionTypes from '../actionTypes'
import api from '../api'

export const action_1 = () => async (dispatch, getState) => {
  const res = await api.get('/action_1')
  dispatch({
    type: actionTypes.ACTION_EXAMPLE_1
  })
  return res
}

export const action_2 = (values) => async (dispatch, getState) => {
  const res = await api.post('/action_2', values)
  dispatch({
    type: actionTypes.ACTION_EXAMPLE_2,
    values
  })
  return res
}
