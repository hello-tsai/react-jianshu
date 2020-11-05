import * as constance from './actionTypes'
import axios from 'axios'

export const handleAccountAction = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account =' + account + '&password=' + password).then(res  => {
      const resp = res.data.data
      const action = {
        type: constance.HANDLE_ACCOUNT_PASSWORD,
        value: resp
      }
      dispatch(action)
    })
  }
}

export const changeLoginAction = () => ({
  type: constance.CHANGE_LOGIN,
  value: false,
})
