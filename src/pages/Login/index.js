import React, {Component} from "react";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox } from './style'
import zrender from 'zrender'
import { actionCreators } from './store'

class Detail extends Component{
  render() {
    if (!this.props.loginStates){
      return (
        <LoginWrapper>
          <LoginBox>
            <div className="title"><span className='active'>登录</span>·<span>注册</span></div>
            <div className="input-wrapper">
              <input placeholder="账号" ref={(input) => this.account = input} type="usrName"/>
              <input placeholder="密码" ref={(input) => this.password = input} type="passWord"/>
            </div>
            <div className='submit-bottom' onClick={() => this.props.login(this.account, this.password)}>
              登录
            </div>
          </LoginBox>
          <div className='nothing' ref={(item) => {this.ZItem = item}} >
          </div>
        </LoginWrapper>
      )
    }else {
      return <Redirect to='/'/>
    }
  }
  componentDidMount() {
    let zr = zrender.init(this.ZItem);
    let circle = new zrender.Arc({
      shape: {
        cx: 250,
        cy: 250,
        r: 200,
        startAngle: 0,
        endAngle: 90,
        clockwise:false,
      },
      style: {
        fill: 'green',
        stroke: 'yellow',
        text: 'hello-wrlod',
        fontSize:40,
        textFill: 'red'
      }
    });
    zr.add(circle);
  }
}
const mapState = (state) => ({
  loginStates: state.login.login
})
const mapDispatch = (dispatch) => ({
  login(account,password) {
    dispatch(actionCreators.handleAccountAction(account.value, password.value))
  },
})

export default connect(mapState, mapDispatch)(Detail)
