import * as constance from './actionTypes'
const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1,
}

export default (state= defaultState, action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case constance.SEARCH_FOCUS:{
      newState.focused = action.value
      return newState
    }
    case constance.CHANGE_LIST:{
      newState.totalPage = action.totalPage
      newState.list = action.list
      return newState
    }
    case constance.CHANGE_MOUSE_IN:{
      newState.mouseIn = action.value
      return newState
    }
    case constance.CHANGE_PAGE:{
      newState.page = newState.page + 1
      if (newState.page >= newState.totalPage){
        newState.page = 0
      }
      return newState
    }
    default:return state
  }
}
