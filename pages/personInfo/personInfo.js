// pages/personInfo/personInfo.js
const filter = require('../../utils/filter');
Page(filter.loginCheck({

  /**
   * 页面的初始数据
   */
  data: {
    stuInfo:{
      Iurl:"/images/c1.jpg",
      stuName:"aa",
      stuId:"2018***",
      grade:"2018",
      major:"软件工程",
      class:"1班",
      
    },
   
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
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

  },
  updateInfo(){
    wx.navigateTo({
      url:"../../pages/updateInfo/updateInfo"
    })
  }
})
)