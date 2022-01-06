import { View, Text } from "@tarojs/components";
import { useObserver } from "mobx-react";

function Child(props) {
  return useObserver(() => (
    <div>
      <View>
        <Text>Child</Text>
        <Text>{props.store.counter}</Text>
      </View>
    </div>
  ));
}

export default Child;
