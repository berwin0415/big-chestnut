import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtList, AtListItem } from "taro-ui";

import styles from "./index.module.scss";
import { getBookList } from "../../api/books";
import { navigateTo } from "@tarojs/taro";
// import { showTabBar } from '@tarojs/taro'

export default class Index extends Component {
  state = {
    list: [],
    loading: false
  };

  getBooks = () => {
    this.setState({ loading: true });
    getBookList()
      .then(res => {
        const data = res.data;
        if (data.code === 1) {
          console.log(res);
          this.setState({ list: data.data.list, loading: false });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  componentWillMount() {}

  componentDidMount() {
    this.getBooks();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleBookClick = (book: { id: number; bookName: string }) => {
    book.id &&
      navigateTo({
        url: `/pages/book/index?bookId=${book.id}&bookName=${book.bookName}`
      });
  };
  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <View className={styles.pagebody}>
        <AtList>
          {list.map(item => {
            const disabled = false;
            return (
              <AtListItem
                key={item.id}
                title={item.bookName}
                arrow={disabled ? undefined : "right"}
                note={item.author}
                extraText={disabled ? "敬请期待" : ""}
                disabled={disabled}
                onClick={() =>
                  this.handleBookClick({ id: item.id, bookName: item.bookName })
                }
              />
            );
          })}
        </AtList>
        {/* <AtButton type="primary">申请更多</AtButton> */}
      </View>
    );
  }
}
