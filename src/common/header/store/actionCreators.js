import * as constance from './actionTypes'
import axios from 'axios'

const changeList = (data) => ({
  type: constance.CHANGE_LIST,
  list:data,
  totalPage: Math.ceil(data.length / 6)
})

export  const searchFocus = (value)=> ({
  type: constance.SEARCH_FOCUS,
  value,
})

export const changeMouseIn = (value)=> ({
  type: constance.CHANGE_MOUSE_IN,
  value,
})

export const changePage = () => ({
  type: constance.CHANGE_PAGE
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=> {
      const data = res.data
      if (data.success){
        dispatch(changeList(data.data))
      }
    }).catch(()=>{
      console.log('error')
    })
  }
}
