import React from 'react';
import { Button } from 'antd'
import store from '../store/index'
import { uaername } from '../store/actionCreator';
import '../App.css';
export default class List extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      info: {}
    }
    this.changebtn = this.changebtn.bind(this)
  }
  changebtn () {
    const ADD = uaername('触发名字改变');
    store.dispatch(ADD);
    // console.log(store.getState());
    this.setState({
      info: store.getState()
    });
  }
  render() {
    return (
      <div className='App'>
        <h1>list页面</h1>
        <h2>改变名字： {this.state.info.name}</h2>
        <Button onClick={this.changebtn}>acticon</Button>
      </div>
    );
  }
}
