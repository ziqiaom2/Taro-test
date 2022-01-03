import { Component } from 'react'
import { Provider } from 'mobx-react'
import Demo from './pages/index'
import counterStore from './store/counter'

import './app.less'

const store = {
  counterStore
}

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
        
      </Provider>
    )
  }
}

export default App
