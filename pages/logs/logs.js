//logs.js
const util = require('../../utils/util.js')
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
  data: {
    logs: [],
    show: false,
    columns: ['2018-2019第一学期', '2018-2019第二学期', '2019-2020第一学期', '2019-2020第二学期','2020-2021第一学期' ],
  },
  onClickHide() {
    this.setData({ show: false });
  },
  onClickShow() {
    this.setData({ show: true });
  },
  changePop(){
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  cancel(){
    this.setData({ show: false });
  }, 
  confirm(){
    //切换显示
    this.setData({ show: false });
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
