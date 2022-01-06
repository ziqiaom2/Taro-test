import { View, Text } from "@tarojs/components";
import { inject, useObserver } from "mobx-react";
@inject('store')
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
