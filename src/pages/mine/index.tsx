import { View, Image, Button } from "@tarojs/components";
import React, { useState } from "react";
import {
  AtAvatar,
  AtGrid,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader
} from "taro-ui";
import useUserinfo from "../../hooks/useUserinfo";

import { getGlobalData } from "../../settings";
import styles from "./index.module.scss";

export default function Mine() {
  const [open, setopen] = useState(false);
  const [userinfo] = useUserinfo();
  console.log(userinfo);
  const handleGridClick = (item: object, index: number) => {
    console.log(item, index);
    setopen(true);
  };
  return (
    <View className={styles.pagebody}>
      <View className={styles.header}>
        <Image src={userinfo.avatarUrl} className={styles.background}></Image>
        <AtAvatar
          className={styles.avatar}
          image={userinfo.avatarUrl}
          size="large"
        ></AtAvatar>
        <View className={styles.info}>
          <View>昵称：{userinfo.nickname}</View>
          <View>性别：{userinfo.gender === 1 ? "男" : "女"}</View>
        </View>
      </View>
      <View className={styles.body}>
        <AtGrid
          onClick={handleGridClick}
          data={[
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
              value: "领取中心"
            },
            {
              image:
                "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
              value: "找折扣"
            },
            {
              image:
                "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
              value: "领会员"
            },
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
              value: "新品首发"
            },
            {
              image:
                "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
              value: "领京豆"
            },
            {
              image:
                "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
              value: "手机馆"
            }
          ]}
        />
      </View>
      <AtModal isOpened={open} onClose={() => setopen(false)}>
        <AtModalHeader>敬请期待</AtModalHeader>
        <AtModalContent>马上就来，尽情期待</AtModalContent>
        <AtModalAction>
          <Button onClick={() => setopen(false)}>确定</Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
}
