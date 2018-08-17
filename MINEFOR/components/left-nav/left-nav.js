// components/left-nav/left-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    objectArray: [
      { id: 0, message: '今日推荐' ,url:'../../pages/index-all/all'},
      { id: 1, message: '所有果品', url: '../../pages/index-all'},
      { id: 2, message: '佳沛金果', url: '../../pages/index-all' },
      { id: 3, message: '车厘子', url: '../../pages/index-all' },
      { id: 4, message: '现切水果', url: '../../pages/index-all'},
      { id: 5, message: 'NFC果汁', url: '../../pages/index-all'},
      { id: 6, message: '强势新品', url: '../../pages/index-all' },
      { id: 7, message: '当季时令', url: '../../pages/index-all' },
      { id: 8, message: '招牌推荐', url: '../../pages/index-all' },
      { id: 9, message: '热带水果', url: '../../pages/index-all' },
      { id: 10, message: '苹果梨子', url: '../../pages/index-all' },
      { id: 11, message: '葡提浆果', url: '../../pages/index-all' },
      { id: 12, message: '果篮礼盒', url: '../../pages/index-all' },
      { id: 13, message: '芒橙柑柚', url: '../../pages/index-all' },
      { id: 14, message: '西瓜蜜瓜', url: '../../pages/index-all' },
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changestyle: function (event) {
    
      let id = event.currentTarget.dataset.id;
      var that = this;
      var S = this.data.objectArray[id].url;
      that.setData({
        'currentItem': id,
        'url':S
      });
      console.log(this.data)
      // wx.navigateTo({
      //   url: this.data.objectArray[id].url
      // })
    }

  }
})
