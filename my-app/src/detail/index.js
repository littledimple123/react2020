import React from 'react';
import '../App.css';
import ListChild from '../components/listChild/index'
export default class Detail extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      str: '父组件给子组件传值',
      child: ''
    };
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerListClick = this.handlerListClick.bind(this)
    this.handleParent = this.handleParent.bind(this)
  }
  componentDidMount () {
    // console.log(this.props.location.state)
  }
  handlerClick() {
    this.props.history.push({
      pathname: '/'
    });
  }
  handlerListClick () {
    this.props.history.push({
      pathname: '/list/index',
    });
  }
  handleParent (data) {
    this.setState({
      child: data
    })
  }
  render() {
    return (
      <div className='App'>
        <h1 onClick={this.handlerClick}>回到home页面</h1>
        <h2 onClick={this.handlerListClick}>跳转listPage页面</h2>
        <ListChild str={this.state.str} clickParent={this.handleParent}></ListChild>
        <div>子组件传过来的值 {this.state.child}</div>
      </div>
    );
  }
}
