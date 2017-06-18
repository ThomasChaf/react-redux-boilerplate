import * as actionTypes from '../actionTypes'
import api from '../api'

export const action_1 = () => async (dispatch, getState) => {
  console.log('JE FAIS ACTION 1')
  console.log(api)
  const res = await api.get('/action_1')
  console.log('JAI PAS DE RETOUR API')
  dispatch({
    type: actionTypes.ACTION_EXAMPLE_1,
    payload: { ...res }
  })
  return res
}

export const action_2 = (param_1, param_2) => async (dispatch, getState) => {
  const res = await api.post('/action_2', { param_1, param_2 })
  dispatch({
    type: actionTypes.ACTION_EXAMPLE_2,
    payload: { ...res }
  })
  return res
}
