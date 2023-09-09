// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    userInfo: { // 用户信息
      name: '张三',
      sex: 1,
    },
    info: 77,
    title: '欢迎您',
    swipers: [
      '/assets/images/swiper1.png',
      '/assets/images/swiper1.png',
      '/assets/images/swiper1.png',
      '/assets/images/swiper1.png',
    ],
    
    show: false, // 弹窗显示
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onShow() {
    const tabbar = this.getTabBar?.();
    if (tabbar) {
      tabbar.setData({
        active: 0,
      })
    }
  },
  onLoad() {
    this.setData({
      title: this.getTitle()
    })
  },
  // 计算navbar顶部显示的标题
  getTitle() {
    const sex = {
      1: '先生',
      2: '女士'
    }
    const userInfo = this.data.userInfo;
    const time = this.getTime();
    //@ts-ignore
    const title = sex[userInfo.sex] ?? '';
    return `${time}${userInfo.name}${title}`
  },
  /**
   * 计算时间，是早上、中午还是下午.....
   */
  getTime() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return '早上好！'
    } else if (hour >= 12 && hour <= 14) {
      return '中午好!'
    } else if (hour >= 14 && hour <= 18) {
      return '下午好!'
    } else {
      return '晚上好!'
    }
  },
  /**
   * 功能B弹窗
   */
  handleShowFB() {
    this.setData({
      show: true,
    })
  }
})
