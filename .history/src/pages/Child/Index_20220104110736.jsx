import { View, Text } from "@tarojs/components";
import { useLocalStore, useObserver } from "mobx-react";
import { store } from "../../store/counter";


function Child() {

  console.log(store);
  return useObserver(() => (
    <div>
      <View>
        <Text>Child</Text>
        {/* <Text>{store}</Text> */}
      </View>
    </div>
  ));
}

export default Child;
