
import { Component, Fragment } from "react";
import { Provider } from "mobx-react";
import store from "./store/counterMobx6";
import Index from "./pages/index";


import "./app.less";

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
