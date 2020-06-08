import React from 'react';
import { Button } from 'antd';
import store from '../store/index';
import { uaername, setVisibilityFilter } from '../store/actionCreator';
import '../App.css';
export default class List extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      info: {},
    };
    this.changebtn = this.changebtn.bind(this);
    this.getinfo = this.getinfo.bind(this)
  }
  componentDidMount () {
    console.log(store.getState());
  }
  changebtn() {
    const ADD = uaername('触发名字改变');
    store.dispatch(ADD);
    console.log(store.getState());
    this.setState({
      info: store.getState(),
    });
  }
  getinfo () {
    let cparams = {
      AGE: '18',
      USERID: '20100608001',
    };
    const infos = setVisibilityFilter(cparams);
    store.dispatch(infos);
    console.log(store.getState());
    this.setState({
      info:store.getState()
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>list页面</h1>
        <h2>改变名字： {this.state.info.name}</h2>
        <Button onClick={this.changebtn}>acticon</Button>
        <h2>
          获取的年龄和用户id是：{this.state.info.age}-----
          {this.state.info.userid}
        </h2>
        <Button onClick={this.getinfo}>获取用户信息</Button>
      </div>
    );
  }
}
