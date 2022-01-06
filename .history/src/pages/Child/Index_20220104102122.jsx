import { View, Text } from "@tarojs/components";
import { useLocalStore, useObserver } from "mobx-react";
import { store } from "../../store/counter";

function Child() {
  const counterStore = useLocalStore(()=>store)
  return useObserver(() => (
    <div>
      <View>
        <Text>Child</Text>
        <Text>{counterStore.counter}</Text>
      </View>
    </div>
  ));
}

export default Child;
