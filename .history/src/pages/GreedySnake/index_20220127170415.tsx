import { View } from '@tarojs/components';
import { useObserver } from 'mobx-react';
import React from 'react';
import { AtButton } from 'taro-ui';

export default function GreedySnake() {
  return (useObserver(() => (
    <View>
      <View>hahhahahahhaha</View>
      <AtButton></AtButton>
    </View>
  )));
}
