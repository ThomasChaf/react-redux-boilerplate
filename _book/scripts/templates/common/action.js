import * as actionTypes from '../actionTypes'
import api from '../api'

export const XXX = () => async (dispatch, getState) => {
  const res = await api.get('/XXX')
  dispatch({
    type: actionTypes.XXX
  })
  return res
}
