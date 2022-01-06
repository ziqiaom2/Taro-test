import { View, Text } from "@tarojs/components";
import {  useObserver } from "mobx-react";
import  store  from "../../store/counter";


function Child() {

  console.log('store:',store);
  return useObserver(() => (

      <View>
        <Text>Child</Text>

        <Text>{store.counter}</Text>

      </View>

  ));
}

export default Child;
