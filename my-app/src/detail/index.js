import React from 'react';
import '../App.css';
export default class Detail extends React.Component {
  constructor(prop) {
    super(prop);
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerListClick = this.handlerListClick.bind(this)
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
      pathname:'/listpage/index'
    })
  }
  render() {
    return (
      <div className='App'>
        <h1 onClick={this.handlerClick}>回到home页面</h1>
        <h2 onClick={this.handlerListClick}>跳转listPage页面</h2>
      </div>
    );
  }
}
