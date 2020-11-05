import React, {Component} from "react";
import {RecommendWrapper, RecommendItem } from '../style'
import { connect } from "react-redux";
class Recommend extends Component{
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.recommendList.map((item)=>{
            return (
              <RecommendItem key={item.id}>
                <img src={item.imgUrl} alt=""/>
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}
const mapState = (state) => ({
  recommendList: state.home.recommendList || []
})

export default connect(mapState, null)(Recommend)
