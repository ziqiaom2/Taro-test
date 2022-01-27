import Taro, { getCurrentInstance } from "@tarojs/taro";

import { useEffect, useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject, useObserver } from "mobx-react";

import { AtButton } from 'taro-ui';

import Child from "../../componets/Child/index";
import Blog from "../Blog";
import store from '../../store/counterMobx6';

import "./index.less";

type PageStateProps = {
  store: {

    counter: number;
    increment: Function;
    decrement: Function;
    incrementAsync: Function;

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
    // 接收路由跳转传过来的参数
    setTitle($instance.router!.params.title!);
    return () => { };
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
    Taro.navigateTo({ url: '/pages/Blog/index' });
  };
  const toTodoList = () => {
    Taro.navigateTo({ url: '/pages/TodoList/index' });
  };
  const toGreedySnake = () => {
    Taro.navigateTo({ url: '/pages/GreedySnake/index' })
  }

  return useObserver(() => (
    <View className='index'>
      <View className='buttons' >
        <AtButton className='atButton' type='primary' onClick={increment}>+</AtButton>
        <AtButton className='atButton' type='primary' onClick={decrement}>-</AtButton>
        <AtButton className='atButton' type='primary' onClick={incrementAsync}>Add Async</AtButton>
        <Text>{store.counter}</Text>
        <Child />

        <Text>从Blog路由传来的title:{title}</Text>
      </View>
      <View className='buttons' >
        <AtButton className='atButton' type='secondary' onClick={toIndex}>导航去Blog页面</AtButton>
        <AtButton className='atButton' type='secondary' onClick={toTodoList}>导航去TodoList页面</AtButton>
        <AtButton className='atButton' type='secondary' onClick={toGreedySnake}>导航去GreedySnake页面</AtButton>
      </View>

    </View>
  ));
}
