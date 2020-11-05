import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
  .nothing{
    width: 550px;
    height: 550px;
  }
`

export const LoginBox = styled.div`
 width: 400px;
 margin: 60px auto 0;
 padding: 50px 50px 30px;
 background-color: #fff;
 border-radius: 4px;
 box-sizing: border-box;
 box-shadow: 0  0 8px rgba(0,0,0,0.1);
 .title{
   text-align: center;
    margin: 10px auto;
    font-size: 18px;
    margin-bottom: 40px;
 }
 .active{
 font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
 }
 .input-wrapper{
   margin-left: 40px;
    input {
    display: block; 
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #777; 
 }
 }
 .submit-bottom{
    width: 220px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
 }
`
