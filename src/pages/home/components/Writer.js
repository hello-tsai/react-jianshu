import React, {Component} from "react";
import {WriterWrapper, WriterItem, WriterTitle } from '../style'
import { connect } from "react-redux";
class Writer extends Component{
  render() {
    return (
      <WriterWrapper>
        <WriterTitle>
          <div>推荐作者</div>
          <div><i className="iconfont iconspin"/>换一换</div>
        </WriterTitle>
        {
          this.props.writerList.map((item)=>{
            return (
              <WriterItem key={item.id}>
                <img className="avatar" src={item.avatar_source} alt=""/>
                <div className="content-wrapper">
                  <div className="name">{item.nickname}</div>
                  <div className="content">写了{(item.total_wordage/1000).toFixed(1)}k字 - {(item.total_likes_count/1000).toFixed(1)}k喜欢</div>
                </div>
                <div>
                  <span className={(item.is_following_user)? 'notFollow':'hidden'}><i className="iconfont iconjia"/>关注</span>
                  <span className={(item.is_following_user)? 'hidden':'fallow'}><i className="iconfont icongou"/>已关注</span>
                </div>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}
const mapState = (state) => ({
  writerList: state.home.writerList || []
})

export default connect(mapState, null)(Writer)
