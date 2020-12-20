import React, { useEffect, useState } from "react";
import { Image, View } from "@tarojs/components";
import {
  getCurrentInstance,
  pageScrollTo,
  switchTab,
  useDidShow
} from "@tarojs/taro";
import { genStaticUrl } from "../../utils";
import styles from "./index.module.scss";
import { getGlobalData } from "../../settings";
import { GLOBAL_DATA_USERINFO } from "../../settings/constants";
import { getArticleDetail } from "../../api/books";
import { AtButton } from "taro-ui";

const HomeImage = "/images/welcome.jpg";

export default function Home() {
  const [article, setArticle] = useState({
    bookId: "",
    chapterName: "",
    content: "",
    id: "",
    next: "",
    prev: ""
  });

  useEffect(() => {
    if (article.id) {
      //   pageScrollTo({ scrollTop: 0 });
      setArticle({ ...article, content: "" });
      getArticleDetail({ id: article.id }).then(res => {
        if (res.data.code === 1) {
          setArticle(res.data.data);
        }
      });
    }
  }, [article.id]);
  useDidShow(() => {
    const query = getCurrentInstance().router.params;
    setArticle({ ...article, id: query.id });
  });

  return (
    <View className="at-article">
      <View className="at-article__h1">{article.chapterName}</View>
      <View className="at-article__content">
        {article.content.split("\n").map((item, i) => (
          <View className="at-article__p" key={i}>
            {item}
          </View>
        ))}
      </View>
      <View style={{ padding: "30px 10px", display: "flex" }}>
        <AtButton
          type="primary"
          onClick={() => setArticle({ ...article, id: article.prev })}
        >
          上一页
        </AtButton>
        <AtButton
          type="primary"
          onClick={() => setArticle({ ...article, id: article.next })}
        >
          下一页
        </AtButton>
      </View>
    </View>
  );
}
