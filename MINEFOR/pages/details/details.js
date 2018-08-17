// pages/details/details.js
//var menulist = require('../../libs/menu.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detaillist: "",
    count:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'detaillist',
      success: (res) => {
        if(res.data.count){
          this.setData({
            detaillist: res.data,
            count: res.data.count
          })
        }else{
          this.setData({
            detaillist: res.data,
            count: 0
          })
        }
        
        //console.log(this.data.detaillist)
      }
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
  addcount:function(){
    this.setData({
      'count':this.data.count+1
    });
    this.data.detaillist.count = this.data.count;
    //console.log(this.data.detaillist)
    wx.setStorage({
      key: "detaillist",
      data: this.data.detaillist,
    });
  },
  gocart:function(){
    wx.switchTab({
      url: '../cart/cart', 
    })
  }
})