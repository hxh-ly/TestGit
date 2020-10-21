const filter = require('../../utils/filter');
Page(
  filter.loginCheck({
  // ...
  data:{
    act_record:[{
      name:"助力创文，爱满潮州，旧衣环保志愿",
      date:"2020-03-04",
      time:"14:00-16:00",
      score:0.3,
      status:1,
      iUrl:"http://static.runoob.com/images/demo/demo1.jpg",
      
    },{
        name: "助力创文，爱满潮州，旧衣环保志愿",
        date: "2020-03-04",
        time: "14:00-16:00",
        score: 0.3,
        status: 0,
        iUrl: "http://static.runoob.com/images/demo/demo1.jpg"
    }]
  },
  onLoad: function (options) {
     var that=this;
    wx.checkSession({
      success(res){
     
      },
      fail(res){
        wx.navigateTo({

          url: '/pages/login/login',

        })
      }
    })
  },

  // ...
})



);