// pages/showScore/showScore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    columns: ['2018-2019第一学期', '2018-2019第二学期', '2019-2020第一学期', '2019-2020第二学期', '2020-2021第一学期'],
    context:''
  },
  onPop(){
    this.setData({
      show:true
    })
  },
  onClose(){
    this.setData({
      show: false
    })
  },
  cancel() {
    this.setData({ show: false });
  },
  confirm(res) {
    //切换显示
    var that =this;
    console.log(res)
    var index=res.detail.index;
   
    //获取数据展示
    that.setData({
      context:that.data.columns[index]
    })
    
   

    that.setData({
      show: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      context: that.data.columns[4]
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

  }
})