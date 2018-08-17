                       
//获取应用实例
const app = getApp()
var menulist = require('../../libs/menu.js');
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    address:'配送至：力宝大厦',
    imgUrls: [
      '../../img/111.png',
      '../../img/222.png',
      '../../img/333.png'
    ],
    objectArray: [ ],
    menuUrls: "",
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    wx.clearStorage()
    this.setData({
      menuUrls: menulist
    })
    wx.request({
      url: 'https://daojia.jd.com/client?_djrandom=15344024997337&functionId=store%2FstoreDetailV220&body=%7B%22ref%22%3A%22channelPage%2FchannelId%3A3997%2FchannelName%3A%255Bobject%2520Object%255D%2Fres_unit%3A2%2Fres_type%3Aball_10%2Funit_index%3A2%2Fres_name%3A%25E6%2596%25B0%25E9%25B2%259C%25E6%259E%259C%25E8%2594%25AC%2Ftpl%3Atpl3%2FLID%3A1%22%2C%22storeId%22%3A%2211794282%22%2C%22skuId%22%3A%22%22%2C%22activityId%22%3A%22%22%2C%22promotionType%22%3A%22%22%2C%22longitude%22%3A0%2C%22latitude%22%3A0%2C%22missionId%22%3A%22%22%2C%22sourcePage%22%3A%22%22%7D&appVersion=5.7.0&appName=paidaojia&platCode=H5&jdDevice=&signKey=5cc36f1a42e0dbabac1634ecffe34acb', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        this.setData({
          'objectArray': res.data.result.cateList.splice(1)
        })
        // console.log(this.data.objectArray)
      }
    })
    // console.log(this.data.menuUrls)
  } ,
  onShow:function(){
    wx.getStorage({
      key: 'address',
      success: (res) => {
        this.setData({
          address: "配送至：" + res.data
        })
      }
    })
  },
  changestyle: function (event) {
    // console.log(this.data)
    let id = event.currentTarget.dataset.id;
    // let classify = this.data.objectArray[id].classify;
    let startlist = menulist;

    var findid = startlist.find(item => {
      return item.catId === id;
    });
    // console.log(findid)
    var that = this;
    that.setData({
      'currentItem': id,
      'menuUrls': findid.searchResultVOList
    });
  } ,
  sendto:function(event){

    wx.navigateTo({
      url: '../address/address',
    })
    // console.log(event)
  },
  setdetail:function(event){
    wx.setStorage({
      key: "detaillist",
      data: event.currentTarget.dataset
    });
    wx.navigateTo({
      url: '../details/details',
    })
  }          

})
