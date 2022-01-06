import { View, Text } from "@tarojs/components";
import { useObserver } from "mobx-react";
import { store } from "../../store";

function Child() {
  return useObserver(() => (
    <div>
      <View>
        <Text>Child</Text>
        <Text>{store.counter}</Text>
      </View>
    </div>
  ));
}

export default Child;
