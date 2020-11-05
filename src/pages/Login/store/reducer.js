import * as constance from './actionTypes'

const defaultState = {
  login: false,
}
export default (state= defaultState, action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case constance.HANDLE_ACCOUNT_PASSWORD:{
      newState.login = action.value
      return newState
    }
    case constance.CHANGE_LOGIN:{
      newState.login = action.value
      return newState
    }
    default:return state
  }
}
