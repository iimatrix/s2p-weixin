// components/func-grid/index.ts
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
    show: false,
    columnNum: 2,
    list: [
      {icon: '/assets/images/fA.png', text: '功能A',},
      {
        icon: '/assets/images/fB.png', 
        text: '功能B',
        bindTap: 'handleShowFB',
      },
      {icon: '/assets/images/fC.png', text: '功能C',},
      {icon: '/assets/images/fD.png', text: '功能D',},
      {icon: 'service-o', text: '功能E',},
      {icon: 'bag-o', text: '功能F',},
      {icon: 'play-circle-o', text: '功能G',},
      {icon: 'flag-o', text: '功能H',},
      {icon: 'music-o', text: '功能I',},
      {icon: 'shop-collect-o', text: '功能J',},
      {icon: '', text: '',},
      {icon: '', text: '',},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleShowFB() {
      //@ts-ignore
      this.setData({
        show: true,
      })
    }
  },
  attached() {
    wx.getSystemInfo({
      success() {

      }
    })
  }
})
