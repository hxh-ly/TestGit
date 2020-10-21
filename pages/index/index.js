Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    imgUrls: [
      '../../images/c1.jpg',
      '../../images/c2.jpg',
      '../../images/c3.jpg'
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    //讲座
    speech: [{
      name: "寻找秋天",
      date: "2020/01/01",
      time: "上午9点",
      aUrl: "http://static.runoob.com/images/demo/demo1.jpg"
    }, {
        name: "秋天第一杯奶茶",
        date: "2020/01/01",
        time: "上午9点",
        aUrl: "http://static.runoob.com/images/demo/demo1.jpg"
      }],
    //活动
  activity:[
    {
      name:"寻找秋天",
      date:"2020/01/01",
      time:"上午9点",
      aUrl:"http://static.runoob.com/images/demo/demo1.jpg"
    },{
      name: "秋天第一杯奶茶",
      date: "2020/01/01",
      time: "上午9点",
      aUrl: "http://static.runoob.com/images/demo/demo1.jpg"
    }
  ],
  // 通知
  inform:[
    {

    },
    {}
  ],
  //比赛
  race:[
    { },
    { }
  ]

  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  // 跳转到活动详情页
  toDetail(){
    wx.navigateTo({
      //跳转页面的路径，可带参数 ，用?隔开，不同参数用&分隔；
      url:'../../pages/actDetail/actDetail',  
      success:function(){console.log("to detail");
      }  ,      //成功后的回调；
      fail:function(){}   ,       //失败后的回调；
      complete:function(){}      //结束后的回调(成功，失败都执行)
  })
  }
})