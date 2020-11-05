import * as constance from './actionTypes'
import React from "react";

const defaultState = {
    title : '为什么这个世代的小说会如此平庸和狭隘',
    contents : '          <img src="https://upload.jianshu.io/admin_banners/web_images/4995/af694827b911ab360fe44d5252422109849c5760.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>\n' +
      '          <p>其实我不是一个写作者，文学甚至不是我的专长。但是我过去一直在做媒体，现在负责简书，在版权中心也看到了很多的作品。</p>\n' +
      '          <p>我想跟大家聊一聊作品背后的一些事情，这些事情虽然看上去不那么直观，但却直接影响了作品的水准。换句话说，今天是想跟大家聊一聊作品背后的三观。这个三观，其实对一部作品的生命力和它的价值影响是至关重要的。</p>\n' +
      '          <p>现在简书版权其实收到了很多的小说作品，不客气地说，大部分的作品都存在着非常严重的问题。这个问题并不是技巧性的，或者说主要不是技巧性的问题。</p>\n' +
      '          <p>讲到这儿，我给大家来举例子，说说一些正面的好的作品应该是什么样子。首先说说王安忆先生，她在复旦大学开设了一门创意写作课，专门来讲好小说的一个共同特点。她列举了中外很多作品，对他们做了一个评析。她认为好小说的共同特点是，小说是作者构造了一个跟现实世界不同的一个完整的心灵世界。</p>'
}
export default (state= defaultState, action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type){
    case constance.CHANGE_SHOW_SCROLL:{
      newState.showScroll = action.value
      return newState
    }
    default:return state
  }
}
