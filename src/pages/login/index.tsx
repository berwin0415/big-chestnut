import { Form, View } from "@tarojs/components";
import Taro, { setStorage, switchTab } from "@tarojs/taro";
import React from "react";

import WxLogin from "./WxLogin";
import { isEnvWeapp } from "../../utils";
import styles from "./index.module.scss";
import { TOKEN } from "../../settings/constants";

export default function Login() {
  const renderForm = () => (
    <Form onSubmit={this.formSubmit} onReset={this.formReset}></Form>
  );
  const handleLoginSuccess = (data: {
    code: number;
    data: { token: string };
  }) => {
    setStorage({ key: TOKEN, data: data.data.token }).then(res => {
      Taro.atMessage({
        message: "登录成功",
        type: "success"
      });
      switchTab({
        url: "/pages/index/index"
      });
    });
  };
  return (
    <View className={styles.container}>
      {isEnvWeapp ? <WxLogin onSuccess={handleLoginSuccess} /> : renderForm()}
    </View>
  );
}
