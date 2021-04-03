export default {
  pages: [
    "pages/home/index",
    "pages/index/index",
    "pages/mine/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        iconPath: "assets/images/tab-icon-home.png",
        selectedIconPath: "assets/images/tab-icon-home-on.png",
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        iconPath: "assets/images/tab-icon-mine.png",
        selectedIconPath: "assets/images/tab-icon-mine-on.png",
        pagePath: "pages/mine/index",
        text: "我的"
      }
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "black"
  },
};
