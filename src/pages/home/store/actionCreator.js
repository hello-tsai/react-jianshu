import * as constance from './actionTypes'

export const changeHomeDataAction = (data) => ({
  type: constance.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList,
})


export const addHomeList = (data)=>({
  type: constance.ADD_HOME_LIST,
  list:data
})

export const setShowScroll = (data) =>({
  type: constance.CHANGE_SHOW_SCROLL,
  value:data
})
