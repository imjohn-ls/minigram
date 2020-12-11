// components/calculate.js
Component({
  properties: {
    myvalue: String
  },
  observers: {
    'msg': function (msg) {
      console.log('msg:' + msg);
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    msg: '123',
    custName: '张威',
    custIdCard: '411503199210163014'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    update: function (e) {
      // console.log(e.detail.value)
      this.setData({
        myvalue: e.detail.value
      })
      const str = e.detail.value
      this.triggerEvent("getMsgUpate", str)
    },
    //人脸识别，请求进行基于生物识别的人脸核身
    startface: function (name, idcard) {
      const _ = this
      wx.startFacialRecognitionVerify({
        name: _.data.custName, //身份证名称
        idCardNumber: _.data.custIdCard, //身份证号码
        success: function (res) {
          var verifyResult = res.verifyResult; //认证结果
          console.log(verifyResult)
          //调用接口

        },
        checkAliveType: 2, //屏幕闪烁(人脸核验的交互方式，默认0,读数字)
        fail: err => {
          wx.showToast('请保持光线充足，面部正对手机，且无遮挡')
        }
      })
    },
  }
})