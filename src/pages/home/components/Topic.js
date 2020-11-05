import React, {Component} from "react";
import {TopicWrapper, TopicItem } from '../style'
import { connect } from "react-redux";
class Topic extends Component{
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item)=>{
            return (
              <TopicItem key={item.id}>
                <div className='wrapper'><div className='images'/>{item.title}</div>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
  )
  }
}
const mapState = (state) => ({
  list: state.home.topicList || []
})

export default connect(mapState, null)(Topic)
