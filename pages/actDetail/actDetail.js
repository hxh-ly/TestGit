// pages/actDetail/actDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    act:[{
      name:"",
      release:'',
      date:'',
      time:'',
      location:'',
      limitNum:30,
      numRegister:1,
      score:0.3,
      descride:"",
      iUrl:"",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that=this;
    // var pages = getCurrentPages();
    // var Page = pages[pages.length - 1];//当前页
    // var prevPage = pages[pages.length - 2];  //上一个页面
    // var info = prevPage.data //取上页data里的数据也可以修改
    // console.log(info)

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
  //报名
  signUp(){
    
    
      wx.showToast({
        title: '正在提交',
        icon: "loading",
        duration:2500,
        success(res){
        //提交到数据库
        //提交成功显示
         setTimeout(function(){
           wx.showToast({
             title: '成功',
             icon: "success",
             
           })
         },2000)
        }
      })
    
    //等待
      
        
     
    //显示提交成功
  }
  
})