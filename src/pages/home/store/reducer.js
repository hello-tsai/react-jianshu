import * as constance from './actionTypes'

const defaultState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  showScroll: false,
}
export default (state= defaultState, action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case constance.CHANGE_HOME_DATA:{
      newState.topicList = action.topicList
      newState.articleList = action.articleList
      newState.recommendList = action.recommendList
      newState.writerList = action.writerList
      return newState
    }
    case constance.ADD_HOME_LIST:{
      newState.articleList = newState.articleList.concat(action.list)
      return newState
    }
    case constance.CHANGE_SHOW_SCROLL:{
      newState.showScroll = action.value
      return newState
    }
    default:return state
  }
}
