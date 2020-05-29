import React from 'react';
import '../App.css';
export default class Detail extends React.Component {
  constructor(prop) {
    super(prop);
    this.handlerClick = this.handlerClick.bind(this);
  }
  componentDidMount () {
    console.log(this.props.location.state)
  }
  handlerClick() {
    this.props.history.push({
      pathname: '/'
    });
  }
  render() {
    return (
      <div className='App'>
        <h1 onClick={this.handlerClick}>回到home页面</h1>
      </div>
    )
  }
}
