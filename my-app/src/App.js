import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick() {
    this.props.history.push({
      pathname: '/detail/index',
      state: { id: '1' }, // 也可以用query：{id: '1'}  区别是：state是加密传输，浏览器上看不见，query不是加密传输，浏览器可以看见
    });
  }
  render() {
    return (
      <div className='App'>
        <h1>hello world</h1>
        <h2 onClick={this.handleclick}>to Detail</h2>
      </div>
    );
  }
}
