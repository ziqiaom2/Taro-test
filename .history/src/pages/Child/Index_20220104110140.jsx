import { View, Text } from "@tarojs/components";
import { useLocalStore, useObserver } from "mobx-react";
import { store } from "../../store/counter";


function Child() {
  const counter = useLocalStore(()=>store)
  console.log(counter);
  return useObserver(() => (
    <div>
      <View>
        <Text>Child</Text>
        <Text>{counter.counter}</Text>
      </View>
    </div>
  ));
}

export default Child;
