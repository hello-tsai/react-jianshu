import styled from "styled-components";
import logoPic from '../../statics/image/logo.png'

export const HeaderWrapper = styled.div`
height:56px;
display:flex;
border-bottom:1px solid #f0f0f0;
font-family: Microsoft YaHei;
`
export const Logo = styled.a`
  display:inline-block;
  height:56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  display:flex;
  flex: 1;
  align-items: center;
`
export const NavItem = styled.div`
  display:flex;
  font-size: 15px;
  &.left{
    display: flex;
    align-items: center;
    color: #333;
  }
  &.left div{
    margin-right:15px;
  }
  & .active{
    color:#ea6f5a;
  }
   &.right{
    display:flex;
    align-items: center;
    color: #969696;
    font-size: 15px;
   }
    &.right div{
    margin-left:15px;
    color: #969696;
  }
    &.right a div{
      margin-right: 18px;
    }
    &.right>div:nth-of-type(1){
      padding: 10px 22px;
      color: #ea6f5a;
      border: 1px solid rgba(236,97,73,.7);
      border-radius: 20px;
      cursor: pointer;
    }
    &.right>div:nth-of-type(1):hover{
      color: #ec6149;
      border-color: #ec6149;
      background-color: rgba(236,97,73,.05);
    }
    &.right>div:nth-of-type(2){
      padding: 10px 22px;
      margin-right: 12px;
      border-radius: 20px;
      color: #fff;
      background-color: #ea6f5a;
      cursor: pointer;
    }
    &.right>div:nth-of-type(2):hover{
      color: #fff;
      background-color: #ec6149;
    }
`

export const NavSearch = styled.div`
  flex:1;
`
export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  input{
    transition: all 0.2s ease-out;
    width:150px;
    height:38px;
    box-sizing:border-box;
    padding:0 20px;
    border:1px solid #eee;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size: 14px;
    padding-right:40px;
  }
  input::placeholder{
    color: #999;
  }
  .showLong{
    width:225px
  }
  i{
    color: #777;
    position: absolute;
    right: 8px;
    top:4px;
    width:30px;
    height: 30px;
    border-radius: 50%;
    line-height:30px;
    text-align: center;
  }
  .showLongIcon{
    background: #777;
    color: #fff;
  } 
`

export const SearchInfo = styled.div`
   position: absolute;
   left: 0;
   top: 48px;
   width:250px;
   box-shadow: 0 0 8px rgba(0,0,0,.2);
   border-radius: 4px;
   padding: 0 20px 20px;
   font-size:14px;
   box-sizing:border-box;
   background: #fff;
   .change{
     position: absolute;
     top: 10px;
     right:20px;
     color: #969696;
     font-size: 13px;
     cursor: pointer;
     & i {
       display:block;
       top: -7px;
       right:36px;
       color: #969696;
       font-size: 12px;
       transition: all .2s ease-out;
       transform-origin: center center;
     }
   }
   .title{
     margin-top: 20px;
     margin-bottom:15px;
     color: #969696
   }
   &:before{
     background:red;
   }
`
export const SearchInfoItem = styled.a`
    line-height:20px;
    padding:0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right:10px;
    margin-bottom: 10px;
    display: inline-block;
`
