// pages/collect/collect.js
const app = getApp();
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray:"",
    length:"3"
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
    qqmapsdk.getCityList({
      success: (res)=> {
        let arr=[];
        let msg = res.result[1];
        msg.map(function(item,index){
          if(item.fullname.length===3){
            arr.push({ id:item.id, name:item.fullname})
          }
        })
        //console.log(arr)
        this.setData({
          objectArray:arr
        })
      },
      fail: function (res) {
       // console.log(res);
      },
      complete: function (res) {
       //console.log(res);
      }
    });
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

  iscity:function(event){
    //console.log(event)
    wx.setStorage({
      key: "city",
      data: event.currentTarget.dataset.name
    });
    setTimeout(() => {
      wx.navigateBack()
    }, 500)
  }

})