// pages/addplace/addplace.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        id: 1,
        name: 'women',
        value: '女士',
        checked: 'true'
      },
      {
        id: 2,
        name: 'men',
        value: '先生'
      }
    ],
    addarray: [{
        id: 1,
        name: 'home',
        value: '我家',
        checked: 'true'
      },
      {
        id: 2,
        name: 'comp',
        value: '公司'
      },
      {
        id: 3,
        name: 'hosp',
        value: '医院'
      },
      {
        id: 4,
        name: 'scho',
        value: '学校'
      },
      {
        id: 5,
        name: 'othe',
        value: '其他'
      }
    ],
    form: [],
    tip:"",
    display:"none",
    city:"请输入您的收货地址",
    address:"请输入您的收货地址"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.removeStorage({
      key: 'address',
    });
    wx.removeStorage({
      key: 'city',
    });
    wx.removeStorage({
      key: 'logs',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.getStorage({
      key: 'city',
      success: (res) => {
        this.setData({
          city: res.data
        })
      }
    });
    wx.getStorage({
      key: 'address',
      success: (res) => {
        this.setData({
          address: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  addcity:function(){
    wx.navigateTo({
      url: '../collect/collect',
    })
  },
  address:function(){
    wx.navigateTo({
      url: '../addmydress/addmydress',
    })
  },
  formSubmit: function (e) {
    if (e.detail.value.shr.length == 0 
    || e.detail.value.number.length == 0) {
      this.setData({
        'tip': '请填写完整地址信息！',
        'display':"block"
      });
      setTimeout(()=>{
        this.setData({
          'display':"none"
        })
      },2000)
    } else {
      var that = this
      that.setData({
       'form': e.detail.value
    });
    wx.setStorage({
      key: "add-newaddress",
      data: this.data.form
    });
      wx.switchTab({
        url: '../index/index'
      })
  }
},
})