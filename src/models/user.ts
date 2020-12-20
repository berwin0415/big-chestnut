import Taro, { navigateTo } from "@tarojs/taro";
import { get } from "lodash";
import { login } from "../api/common";
import { getUserinfo } from "../api/users";
import { TOKEN } from "../settings/constants";
import { isEnvWeapp } from "../utils";

export default class User {
  public openid: string;
  public avatarUrl: string;
  public nickname: string;
  public gender: number;
  public status: "init" | "success" | "error";
  public logined: boolean = false;

  private auth: boolean = false;
  constructor() {
    this.openid = "";
    this.avatarUrl = "";
    this.nickname = "";
    this.gender = 1;
    this.status = "init";
    this.init();
  }

  async init() {
    await this.login();
    await this.getUserinfo();
  }

  async getAuthSetting() {
    const res = await Taro.getSetting();
    if (get(res, ["authSetting", "scope.userInfo"])) {
      this.auth = true;
    } else {
      console.log(res.authSetting);
      navigateTo({ url: "/pages/login/index" });
    }
  }

  async login() {
    if (Taro.getStorageSync(TOKEN)) {
      this.logined = true;
      return;
    }
    if (isEnvWeapp) {
      await this.getAuthSetting();
      if (this.auth) {
        // const { code } = await Taro.login();
        // const res = await login({});
      }
    }
  }

  async getUserinfo() {
    if (this.logined) {
      const res = await getUserinfo();
      if (res.data.code === 1) {
        const { openid, avatarUrl, gender, nickname } = res.data.data;
        this.openid = openid;
        this.avatarUrl = avatarUrl;
        this.gender = gender;
        this.nickname = nickname;
        this.status = "success";
        return;
      }
    }
    this.status = "error";
  }
}
