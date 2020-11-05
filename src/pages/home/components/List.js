import React, {Component} from "react";
import {LIstWrapper, ListItem, LoadMore } from '../style'
import { connect } from "react-redux";
import axios from 'axios'
import { actionCreators} from '../store'
import { Link } from "react-router-dom";

class List extends Component{
  render() {
    return (
      <LIstWrapper>
        {
          this.props.articleList.map(item=>(
            <Link style={{ textDecoration:'none'}}  key={item.id} to={'/detail/'  + item.id}>
              <ListItem>
                <div>
                  <div className='title'>{item.title}</div>
                  <div className='content'>
                    {item.content}
                  </div>
                </div>
                <img src={this.attachImageUrl(item.imgUrl)} alt=""/>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick = {this.props.getMoreList }>阅读更多</LoadMore>
      </LIstWrapper>
    )
  }
  attachImageUrl(srcUrl) {
    if (srcUrl !== undefined) {
      return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
    }
  }
}
const mapState = (state)=>({
  articleList: state.home.articleList
})
const mapDispatch = (dispatch) => ({
  getMoreList() {
    axios.get('api/homeList.json').then(res =>{
        const resp = res.data.data
      dispatch(actionCreators.addHomeList(resp))
      }
    )
  },
})
export default connect(mapState,mapDispatch)(List)
