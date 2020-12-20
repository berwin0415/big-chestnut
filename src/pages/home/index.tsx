import React from "react";
import { Image, View } from "@tarojs/components";
import { switchTab, useDidShow } from "@tarojs/taro";
import { genStaticUrl } from "../../utils";
import styles from "./index.module.scss";
import { getGlobalData } from "../../settings";
import { GLOBAL_DATA_USERINFO } from "../../settings/constants";

const HomeImage = "/images/welcome.jpg";

export default function Home() {
  useDidShow(() => {
    setTimeout(() => {
      const user = getGlobalData(GLOBAL_DATA_USERINFO);
      if (user.logined) {
        switchTab({
          url: "/pages/index/index"
        });
      }
    }, 2000);
  });

  return (
    <View className={styles.home}>
      <Image
        src={genStaticUrl(HomeImage)}
        className={styles.background}
      ></Image>
    </View>
  );
}
