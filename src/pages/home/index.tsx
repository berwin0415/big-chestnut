import React, { useEffect } from "react";
import { Image, View } from "@tarojs/components";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.less";
import { selectUser, fetchUserInfo } from "../../store/reducers/userSlice";

const IMAGE_URL =
  "cloud://bigchestnut-fjvk9.6269-bigchestnut-fjvk9-1302573840/welcome.jpeg";

let timer = null;

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  return (
    <View className={styles.home}>
      <Image src={IMAGE_URL} className={styles.background}></Image>
    </View>
  );
};
export default Home;
