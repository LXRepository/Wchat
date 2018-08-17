// pages/addmydress/addmydress.js
const app = getApp();
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"输入您的地址",
    searchArray:""
  },


 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'BORBZ-ZHOKO-3W6WI-SNR4V-MZCD3-JEFZR'
    });
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
  getLocal: function (event) {
    let vm = this;
    //console.log(event)
    qqmapsdk.search({
      keyword: event.detail.value,
      success: function (res) {
        //console.log(res);
        if (event.detail.value === 0){
          vm.setData({
            searchArray: ""
          })
        }
        else{
          let searchArray = res.data
          vm.setData({
            searchArray: searchArray
          })
        }
      },
    })
  },
 choice:function(event){
   //console.log(event)
   wx.setStorage({
     key: "address",
     data: event.currentTarget.dataset.title
   });
   setTimeout(() => {
     wx.navigateBack()
   }, 500)
 }
})