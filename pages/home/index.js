// index.js
const util = require('../../utils/util.js')
Page({
  data: {
    bgTextStyle: 'dark',
    scrollTop: '200rpx',
    bgColor: '#ff0000',
    bgColorTop: '#00ff00',
    bgColorBottom: '#0000ff',
    nbTitle: '招行信用卡',
    nbLoading: false,
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    msg: 'button',
    myvalue: '123456',
    datalist: [{
        id: '001',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '002',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '003',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '004',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '005',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '006',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '007',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '008',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '009',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
      {
        id: '010',
        src: '../../img/menu.png',
        text: '額度',
        value: 'edy',
        hot: false
      },
    ]
  },
  onLoad: function (options) {
    if (options.smsg) {
      console.log(options.smsg)
    }
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res.latitude) // 纬度
        console.log(res.longitude) // 经度
      }
    })
    wx.getSystemInfo({
      success: (res) => {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      },
    })
  },
  // 获取当前路由
  getCurrentRoute() {
    let pages = getCurrentPages();
    let currPage = null;
    console.log(pages);
    // console.log(pages) 的到一个数组
    if (pages.length) {
      // 获取当前页面的对象（上边所获得的数组中最后一项就是当前页面的对象）
      currPage = pages[pages.length - 1];
    }
    // 获取当前页面的路由
    let route = currPage.route
    console.log(route)
    return route
  },
  //事件处理函数
  goIndex: function () {
    const route = this.getCurrentRoute();
    if (route.indexOf("index/index") !== -1) {
      console.log('is done')
    } else {
      wx.navigateTo({
        url: '../index/index'
      })
    }
  },
  goHome: function () {
    const route = this.getCurrentRoute();
    if (route.indexOf("home/index") !== -1) {
      console.log('is done')
    } else {
      wx.navigateTo({
        url: '../home/index',
      })
    }
  },
  _writeComment: function (val) {
    console.log(val.detail)
  }
})