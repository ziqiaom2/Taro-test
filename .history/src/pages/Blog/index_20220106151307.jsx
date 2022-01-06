import { View, Text,Button } from "@tarojs/components";
import Taro from '@tarojs/taro'
//新版本要从react引入hooks
import { useState } from 'react'

export default function Blog() {
const [title] = useState('I am a title')
  function tooIndex(){
    Taro.navigateTo({url:`/pages/index/index?title=${title}`})
  }
  return (

      <View>
        <Text>Blog</Text>
        <Button onClick={tooIndex}>导航去index主页面</Button>
      </View>

  );
}
