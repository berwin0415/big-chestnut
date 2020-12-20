import { getSetting } from "@tarojs/taro";
import { get } from "lodash";

export const getAuthSetting = () => {
  return getSetting().then(res => {
    if (get(res, ["authSetting", "scope.userInfo"])) {
    }
  });
};
