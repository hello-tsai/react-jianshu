import React, {Component} from "react";
import { DetailWrapper, DetailTitles,DetailContent } from './style'
import { connect } from 'react-redux'

class Detail extends Component{
  render() {
    return (
      <DetailWrapper>
        <DetailTitles>{this.props.title}</DetailTitles>
        <DetailContent dangerouslySetInnerHTML = {{__html: this.props.contents}}/>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
  }
}
const mapState = (state) => ({
  title: state.detail.title,
  contents: state.detail.contents
})

export default connect(mapState, null)(Detail)
