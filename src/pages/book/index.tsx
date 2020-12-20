import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import {
  getCurrentInstance,
  navigateTo,
  setNavigationBarTitle
} from "@tarojs/taro";
import styles from "./index.module.scss";
import { getBookDetail } from "../../api/books";

export default function Home() {
  const [list, setList] = useState([]);
  const [book, setBook] = useState({ bookName: "" });
  useEffect(() => {
    const query = getCurrentInstance().router.params;
    setBook({ bookName: query.bookName });
    setNavigationBarTitle({ title: query.bookName });
    getBookDetail({ id: query.bookId, pageNo: 1 }).then(res => {
      if (res.data.code === 1) {
        setList(res.data.data.list || []);
      }
    });
  }, []);
  const handleChapterClick = (id: number) => {
    navigateTo({
      url: `/pages/book/chapter?id=${id}`
    });
  };
  return (
    <View className={styles.pagebody}>
      <View>{}</View>
      <AtList>
        {list.map(item => {
          const disabled = false;
          return (
            <AtListItem
              onClick={() => handleChapterClick(item.id)}
              key={item.id}
              title={item.chapterName}
              arrow={disabled ? undefined : "right"}
              extraText={disabled ? "敬请期待" : ""}
              disabled={disabled}
            />
          );
        })}
      </AtList>
    </View>
  );
}
