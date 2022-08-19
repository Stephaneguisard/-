// pages/index/index.js
Page({
  goNewsTap1:function(event){
 wx.navigateTo({
   url: '../wendu/wendu',
 })
 
 this.getwendu();//更新温度

  },

  goNewsTap2:function(){
wx.navigateTo({
  url: '../shidu/shidu',
})
  },

  goNewsTap3:function(){
    wx.navigateTo({
      url: '../pm2.5/pm2.5',
    })
  },

  changeregion: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

getwendu:function(){
  var that=this;

// wx.request({
//   url: 'https://open.iot.10086.cn/iotbox/appsquare/appview?openid=d65741091efb6f290749863c93faf5d6',

//   success:function(res){
// console.log(res.data)
//   }
// })
  wx.request({
    url: 'https://api.heclouds.com/devices/' + '536303071' + '/datastreams/' + '温度',
    header: {
      'api-key': 'nIPBBXviIZYfENWZpCumGVV3Goo ='
    },
    
    // success: function (res) {
    //   console.log(res.data);
    //   _this.setData(
    //     {
    //       update_at: res.data.data.update_at,
    //       device_id: res.data.data.id,
    //       current_value: res.data.data.current_value,
    //       create_time: res.data.data.create_time,
    //     });
    //   console.log(_this.data);
    // },
    fail: function () {
      wx.showToast({
        title: '与服务器通信失败',
        icon: 'fail',
        duration: 2000
      })
    }
  })



},


  /**
   * 页面的初始数据
   */
  data: {
    region:["北京市","北京市","海淀区"]

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

  }
})