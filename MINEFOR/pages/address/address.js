//index.js
//获取应用实例
const app = getApp();
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    province: '',
    city: '成都',
    latitude: '',
    longitude: '',
    district:'',
    street:'',
    street_number:'',
    address:'',
    addressArray:'',
  },
  onLoad: function () {
    let vm = this;
    vm.getUserLocation();
    qqmapsdk = new QQMapWX({
      key: 'BORBZ-ZHOKO-3W6WI-SNR4V-MZCD3-JEFZR' 
    });
  },
  onShow: function () {
    wx.getStorage({
      key: 'city',
      success: (res) => {
        this.setData({
          city: res.data
        })
      }
    })
  },
  getUserLocation: function () {
    let vm = this;
    wx.getSetting({
      success: (res) => {
        // console.log(JSON.stringify(res))
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              // console.log(res);
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      vm.getLocation();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
          vm.getLocation();
        }
        else {
          //调用wx.getLocation的API
          vm.getLocation();
        }
      }
    })
  },
  // 微信获得经纬度
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // console.log(JSON.stringify(res))
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
       
      },
      fail: function (res) {
        console.log('fail' + JSON.stringify(res))
      }
    })
  },
  // 获取当前地理位置
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        // console.log(res);
        let province = res.result.address_component.province
        let city = res.result.address_component.city
        let district = res.result.address_component.district
        let street = res.result.address_component.street
        let street_number = res.result.address_component.street_number
        let address = res.result.address
        vm.setData({
          province: province,
          city: city,
          latitude: latitude,
          longitude: longitude,
          district: district,
          street: street,
          street_number: street_number,
          address:address
        })
        //console.log(vm)
        // wx.setStorage({
        //   key: "address",
        //   data: vm.data.address
        // })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });

    qqmapsdk.search({
      keyword: '大厦',
      success: function (res) {
        // console.log(res);
        let addressArray = res.data
        vm.setData({
          addressArray: addressArray
        })
      },
    })
  },
  Collect:function(){
    wx.navigateTo({
      url: '../collect/collect',
    })
  }
  ,
  ishere:function(event){
    //console.log(event);
    let title = event.currentTarget.dataset.title; 
    this.setData({
      address:title
    });
    wx.setStorage({
      key: "address",
      data: title
    });
    setTimeout(()=>{
      wx.navigateBack()
    },500)
  },
 collect:function(){
   wx.navigateTo({
     url: '../collect/collect',
   })
 },
  addplace: function () {
    wx.navigateTo({
      url: '../addplace/addplace',
    })
  },
  addmydress:function(){
    wx.navigateTo({
      url: '../addmydress/addmydress',
    })
  }
})
