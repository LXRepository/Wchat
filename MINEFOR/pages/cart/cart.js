// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     lists:[],
     spend:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let lists = [];
    wx.getStorage({
      key: 'detaillist',
      success: (res) => {
        // let arr = res.data
        // for (var i in arr) {
        //   lists.push(arr[i]);
        // }
        let spend = res.data.count* parseInt(res.data.price);
        this.setData({
          lists:res.data,
          spend:spend
        })
        console.log(this.data)
      }
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
  onShow: function (event) {


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

})