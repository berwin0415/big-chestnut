import { getStorageSync, getUserInfo, redirectTo } from "@tarojs/taro";
import { Component } from "react";
import "taro-ui/dist/style/index.scss";
import "./app.scss";
import User from "./models/user";
import { setGlobalData } from "./settings";
import { GLOBAL_DATA_USERINFO } from "./settings/constants";


class App extends Component {
  componentWillMount() {
    setGlobalData({ [GLOBAL_DATA_USERINFO]: new User() });
  }
  componentDidMount() {
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
