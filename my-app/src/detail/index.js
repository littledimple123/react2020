import React from 'react';
import '../App.css';
import ListChild from '../components/listChild/index';
import StatusOne from '../components/statusOne/index';
export default class Detail extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      str: 'aaaa',
      child: '',
      val: '',
    };
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerListClick = this.handlerListClick.bind(this);
    this.handleParent = this.handleParent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // console.log(this.props.location.state)
  }
  handlerClick() {
    this.props.history.push({
      pathname: '/',
    });
  }
  handlerListClick() {
    this.props.history.push({
      pathname: '/list/index',
    });
  }
  handleParent(data) {
    this.setState({
      child: data,
    });
  }
  handleChange(e) {
    this.setState({
      val: e.target.value,
    });
  }
  render() {
    return (
      <div className='App'>
        <h1 onClick={this.handlerClick}>回到home页面</h1>
        <h2 onClick={this.handlerListClick}>跳转listPage页面</h2>
        <h1>
          -----------------------------------------父子组件传值------------------------------------------
        </h1>
        <ListChild
          str={this.state.str}
          clickParent={this.handleParent}
        ></ListChild>
        <div>子组件传过来的值：{this.state.child}</div>
        <h1>
          -----------------------------------------状态提升------------------------------------------
        </h1>
        <div>
          <input
            type='text'
            value={this.state.val}
            onChange={this.handleChange}
          />
          <StatusOne value={this.state.val}></StatusOne>
        </div>
      </div>
    );
  }
}
