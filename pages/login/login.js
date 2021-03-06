var app = getApp()

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },

  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              app.globalData.avatarUrl = res.userInfo.avatarUrl
              app.globalData.nickName = res.userInfo.nickName
              console.log(app.globalData.nickName)
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);

                  // 可以传给后台，再经过解析获取用户的 openid
                  wx.request({
                    url: 'http://ylhaaa.icu/api/IM/auth/login?code=' + res.code,
                    header: {
                      'content-type': 'application/json',
                      // token: wx.getStorageSync('token')
                    },
                    success: res => {
                      // 获取到用户的 openid
                      console.log(res)
                      if (res.errMsg === 'request:ok') {
                        //将登录状态的token保存在本地
                        wx.setStorageSync('token', new Date().toString())
                        console.log("登录凭证", wx.getStorageSync('token'))
                      }

                    }
                  });

                }
              })
              wx.redirectTo({
                url: "../../pages/index/index"
              })
            }
          });
        }
      }
    });
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下

      // console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      app.globalData.avatarUrl = e.detail.userInfo.avatarUrl,
        app.globalData.nickName = e.detail.userInfo.nickName

      wx.reLaunch({
        url: "../../pages/index/index"
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }
})