//app.js
App({
  onLaunch: function () {
    if (wx.getStorageSync('token')) {
      wx.switchTab({
          url: '../../pages/index/index'
      })
  } else {
      wx.reLaunch({
          url: '../../pages/login/login'
      })
  }
  },
  data:{
    test: true,
  },
  globalData: {
    userInfo: null,
    nickName:"未登录",
    avatarUrl:null,
  },
  myToast:function(){
    console.log("我是app方法");
    
  }
})