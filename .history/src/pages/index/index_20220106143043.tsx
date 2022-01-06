import Taro,{ getCurrentInstance } from "@tarojs/taro";

import { useEffect, useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject, useObserver } from "mobx-react";
import Child from "../Child";
import Blog from "../Blog";
import store from "../../store/counter";
import "./index.less";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

export default function Index(props) {
  const $instance = getCurrentInstance();
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log("props:", props);
    setTitle($instance.router!.params.title!);
    return () => {};
  }, []);
  const increment = () => {
    store.increment();
  };

  const decrement = () => {
    store.decrement();
  };

  const incrementAsync = () => {
    store.incrementAsync();
  };
  const toIndex = () => {
    Taro.navigateTo({ url: '/pages/Blog/index'});
  };

  return useObserver(() => (
    <View className='index'>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{store.counter}</Text>
      <Child /> 
      <hr />
      <Text>从Blog路由传来的title:{title}</Text>
      <Button onClick={toIndex}>导航去Blog页面</Button>

    </View>
  ));
}
