const app = getApp()

Page({

  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    avatarUrl: "",
    nickName: "未登录"
  },


  onLoad: function (options) {
    var that = this;
    that.setData({
      nickName: app.globalData.nickName,
      avatarUrl: app.globalData.avatarUrl
    })
    //自动授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {

              that.setData({
                avatarUrl: res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName,

              })
            }
          });
        } else {

        }
      }
    });
  },
  //登录
  login() {
    wx.checkSession({
      success(res) {
      },
      fail(res) {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
    })

  },
  onReady: function () {

  },
  onShow: function () {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {

              that.setData({
                avatarUrl: res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName,

              })
            }
          });
        } else {

        }
      }
    });

  },
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
 
})