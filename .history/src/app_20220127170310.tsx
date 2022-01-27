
import { AtButton } from 'taro-ui'
// 除了引入所需的组件，还需要手动引入组件样式
// app.js
import 'taro-ui/dist/style/index.scss' 
import { Component, Fragment } from "react";
import { Provider } from "mobx-react";
import store from "./store/counterMobx6";
import Index from "./pages/index/index";



import "./app.scss";

class App extends Component {
  componentDidMount() {
    console.log("this.props:", this.props);
    console.log("this.store:", store);
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
