import { View, Text } from "@tarojs/components";
import { useObserver } from "mobx-react";
import { counterStore } from "../../store/counter";

function Child() {
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
