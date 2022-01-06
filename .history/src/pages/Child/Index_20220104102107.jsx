import { View, Text } from "@tarojs/components";
import { useLocalStore, useObserver } from "mobx-react";
import { Store } from "../../store/counter";

function Child() {
  const counterStore = useLocalStore(()=>)
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
