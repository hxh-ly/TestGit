// pages/updateInfo/updateInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    name:"",
    grade:"",
    major:"",
    sClass:"",
    value: '',
  },
  formSubmit: function (e) {
    console.log(e.detail.value)
    // console.log(e.detail.value.username)
    // console.log(e.detail.value.tel)
    // console.log(e.detail.value.idcard)
    // console.log(e.detail.value.rank)
    var that = this;
    var name = e.detail.value.name;
    var id = e.detail.value.id;
    var grade = e.detail.value.grade;
    var major = e.detail.value.major;
    var sClass = e.detail.value.sClass;
    if (!(id.length === 12 )) {
      wx.showToast({
        title: '请输入12位学号',
        duration: 2000
      })
    } else {
      wx.request({
        method: "POST",
        url: "",
        data: {
          'name': name,
          'id': id,
          'grade': grade,
          'major': major,
          'sClass': sClass
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.showToast({
            title: '保存成功',
            duration: 2000
          })
        }
      })

    }

  },
  focusId(event){
    var that=this;
    that.setData({
      'id':event.detail.value
    })
    console.log(that.data.data.id)
  },
  //失去焦点
  unfocus(event){
    var that=this;
    //value赋给变量
    console.log(event)
  } , 
  commit(event){
    var that=this;
    //1修改数据库
    wx.showToast({
      title: '正在提交',
      icon: "loading",
      duration: 2500,
      success(res) {
        //提交到数据库
        
         //2修改当前页面
        // that.setData({

        // })
        console.log(event)
        setTimeout(function () {
          wx.showToast({
            title: '成功',
            icon: "success",

          })
        }, 2000)
      }
    })
   
  },
 
  onLoad: function (options) {
    var that=this;
    var pages = getCurrentPages()
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
   console.log(prevPage.data)
    that.setData({
      id:prevPage.data.stuInfo.stuId,
      name: prevPage.data.stuInfo.stuName
    })

  },

 
  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {
  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },
  
})