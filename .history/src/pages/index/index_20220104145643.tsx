import { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject, useObserver } from "mobx-react";
import Child from "../Child";
import Blog from "../Blog";
import "./index.less";

import store from "../../store/counter";

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

function Index(props) {
  const increment = () => {
    const { counterStore } = props.store;
    counterStore.increment();
  };

  const decrement = () => {
    const { counterStore } = props.store;
    counterStore.decrement();
  };

  const incrementAsync = () => {
    const { counterStore } = props.store;
    counterStore.incrementAsync();
  };

  const {
    counterStore: { counter },
  } = props.store;
  return useObserver(() => (
    <View className='index'>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counter}</Text>
      <Child></Child>
      <Blog></Blog>
    </View>
  ));
}

export default Index;
