import Taro from "@tarojs/taro";
import { get } from "lodash";
import React from "react";
import { AtButton, AtMessage } from "taro-ui";

import { login } from "../../api/common";

export default function WxLogin({ onSuccess }) {
  const handleGetUserinfo = e => {
    Taro.login()
      .then(res => {
        const { code } = res;
        return login({
          code,
          encrypted: get(e, "detail.encryptedData", ""),
          iv: get(e, "detail.iv", "")
        });
      })
      .then(res => {
        if (res.data.code === 1) {
          onSuccess && onSuccess(res.data);
        }
      });
  };
  return (
    <>
      <AtMessage></AtMessage>
      <AtButton
        openType="getUserInfo"
        type="primary"
        onGetUserInfo={handleGetUserinfo}
      >
        微信一键登录
      </AtButton>
    </>
  );
}
