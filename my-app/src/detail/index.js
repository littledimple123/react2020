import React from 'react';
export default class Detail extends React.Component {
  constructor(prop) {
    super(prop);
    this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick() {
    this.props.history.push({
      pathname: '/',
    });
  }
  render() {
    return <div onClick={this.handlerClick}>回到home页面</div>;
  }
}
