import { useEffect } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject, useObserver } from "mobx-react";
import Child from "../Child";
import Blog from "../Blog";
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

  useEffect(() => {
    console.log('props:',props);
    return () => {
      
    }
  }, [])
  const increment = () => {

    props.store.increment();
  };

  const decrement = () => {

    props.store.decrement();
  };

  const incrementAsync = () => {

    props.store.incrementAsync();
  };


  return useObserver(() => (
    <View className='index'>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{props.store}</Text>
      <Child></Child>
      <Blog></Blog>
    </View>
  ));
}


