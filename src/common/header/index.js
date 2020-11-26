import React, {Component} from "react"
import { connect } from 'react-redux'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch,SearchWrapper, SearchInfo,SearchInfoItem, HeaderContent} from './style'
import {actionCreators} from './store'
import { actionCreators as LoginAction } from '../../pages/Login/store'
import {Link} from "react-router-dom";

class Header extends Component{

  getListArea(){
    if (this.props.focused || this.props.mouseIn){
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <div className="change" onClick={() => {this.props.handlePage(this.spinIcon)}}>
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont iconspin"/> 换一批</div>
          <div className="title">热门搜索</div>
          <div>
            {
              (this.props.list.slice(this.props.page * 6 ,6 * (this.props.page + 1))).map((item) => {
                return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
              })
            }
          </div>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Logo href = '/'/>
          <Nav>
            <NavItem className='left'>
              <div className='active'>首页</div>
              <div>下载APP</div>
            </NavItem>
            <NavSearch>
              <SearchWrapper>
                <input
                  onFocus={() => (this.props.focusInput(this.props.list,true))} className={(this.props.focused || this.props.mouseIn)? 'showLong': ''}
                  type="text"
                  onBlur={() => (this.props.focusInput(this.props.list,false))}
                  placeholder='搜索'/>
                <i className={((this.props.focused || this.props.mouseIn)? 'showLongIcon': '') + ' iconfont iconfangdajing'}
                />
                {this.getListArea()}
              </SearchWrapper>
            </NavSearch>
            <NavItem className='right'>
              <div><i className='iconfont iconfont-size'/></div>
              <div ><img className='right-beta' src={require('../../statics/image/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png')}alt=""/></div>
              {
                this.props.login?
                  <Link to={'/'} style={{ textDecoration:'none'}}  onClick={this.props.changeLogin}>
                    <div>退出</div>
                  </Link>
                  :
                  <Link to={'/login'} style={{ textDecoration:'none'}} >
                    <div>登录</div>
                  </Link>
              }
              <div>注册</div>
              <div><i
                className='iconfont iconPensyumaobi'/>写文章</div>
            </NavItem>
          </Nav>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

const   mapStateToProps = (state)=> {
  return {
    focused: state.header.focused,
    list: state.header.list,
    page : state.header.page,
    mouseIn: state.header.mouseIn,
    login: state.login.login
  }
}
const   mapDispatchToProps = (dispatch)=> {
  return {
    focusInput(list,value){
      if (value && list.length === 0){
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus(value))
    },
    handleMouseEnter() {
      dispatch(actionCreators.changeMouseIn(true))
    },
    handleMouseLeave() {
      dispatch(actionCreators.changeMouseIn(false))
    },
    changeLogin() {
      dispatch(LoginAction.changeLoginAction())
    },
    handlePage(spinIcon) {
      let originAngle = spinIcon.style.transform.replace(
        /[^0-9]/ig,''
      )
      if (originAngle){
        originAngle = parseInt(originAngle)
      }else {
        originAngle = 0
      }
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`
      dispatch(actionCreators.changePage())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
