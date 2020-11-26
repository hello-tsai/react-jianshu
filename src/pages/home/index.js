import React, {Component} from "react";
import {HomeWrapper,HomeLeft,HomeRight, BackTop} from './style'
import Topic from "./components/Topic";
import { connect } from 'react-redux'
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import axios from 'axios'
import {actionCreators} from './store'

class Home extends Component{
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img src="https://upload.jianshu.io/admin_banners/web_images/4995/af694827b911ab360fe44d5252422109849c5760.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          this.props.showScroll? (
            <BackTop onClick = { this.returnTop}
            ><i className='iconfont iconxiangshang '/></BackTop>
          ) : null
        }
      </HomeWrapper>
    )
  }
  returnTop() {
    window.scrollTo(0,0)
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll',this.props.changeShowScroll) //记得移除
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeShowScroll)
  }
}
const mapState = (state) => ({
  showScroll: state.home.showScroll
})

const mapDispatch = (dispatch)=>({
  changeHomeData(){
    axios.get('api/home.json').then((res)=>{
      const {data} = res.data
      dispatch(actionCreators.changeHomeDataAction(data))
    })
  },
  changeShowScroll() {
    const top = document.documentElement.scrollTop
    if (top> 500){
      dispatch(actionCreators.setShowScroll(true))
    }else {
      dispatch(actionCreators.setShowScroll(false))
    }
  }
})

export default connect(mapState,mapDispatch)(Home)
