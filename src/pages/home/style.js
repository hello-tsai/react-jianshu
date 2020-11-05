import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  padding-top: 30px;
`
export const HomeLeft = styled.div`
  width: 625px;
  margin-right: 30px;
  img{
    width: 100%;
  }
`
export const HomeRight = styled.div`
  width: 280px;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px;
  display: flex;
  flex-wrap: wrap;
  border-bottom:1px solid #dcdcdc ;
`
export const TopicItem = styled.div`
  display: inline-block;
  height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  padding: 0 6px 0 0;
  line-height: 32px;
  margin-right: 10px;
  .wrapper{
    display: flex;
    align-items: center;
  }
  .images{
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 5px;
    background: rebeccapurple;
  }

`
export const LIstWrapper = styled.div`
  width: 100%;
`
export const ListItem = styled.div`
  width: 100%;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  .title{
    font-size: 18px;
    margin-bottom: 4px;
    color: #333;
    font-weight: 700;
    font-family: "Microsoft YaHei UI";
  }
  .content{
    line-height: 24px;
    color: #999;
    font-size: 13px;
  }
  img{
    width: 150px;
    height: 100px;
  }
`

export const RecommendWrapper = styled.div`
  width: 100%;
`

export const RecommendItem = styled.a`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  img{
    width: 100%;
  }
`
export const WriterWrapper = styled.div`
  width: 100%;
`
export const WriterItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  .avatar{
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .content-wrapper{
    flex: 1;
  }
  .name{
    font-size: 14px;
    color: #333;
  }
  .iconfont{
    font-size: 13px;
  }
  .content{
    font-size: 12px;
    color: #969696;
  }
  .hidden{
    display: none;
  }
  .notFollow{
    color: #42c02e;
    font-size: 13px;
    font-weight: 400;
  }
  .fallow{
    color: #969696;
    font-size: 13px;
    font-weight: 400;
  }
`

export const WriterTitle = styled.div`
  display: flex;
  width: 280px;
  font-size: 14px;
  color: #969696;
  padding-top: 30px;
  align-items: center;
  margin-bottom: 20px;
  div:nth-of-type(1){
    flex: 1;
  }
  .iconspin{
    font-size: 12px;
  }
  div:nth-of-type(2):hover{
    color: #787878;
    cursor: pointer;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  margin: 30px auto 60px;
`

export const BackTop = styled.div`
  position: fixed; 
      cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
  text-align: center;
  border: 1px solid #ccc;
  right: 100px;
  bottom: 60px;
  font-size: 16px;
`
