import { View, Text,Button } from "@tarojs/components";
import Taro ,{useState} from '@tarojs/taro'

export default function Blog() {
 const [title, setTitle] = useState('initialState')
  function toIndex(){
    Taro.navigateTo({url:'/pages/index/index'})
  }
  return (
    <div>
      <View>
        <Text>Blog</Text>
        <Button onClick={toIndex}>导航去index主页面</Button>
      </View>
    </div>
  );
}
