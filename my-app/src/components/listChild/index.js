import React from 'react';
export default class ListChild extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleParent = this.handleParent.bind(this);
  }
  handleParent () {
    this.props.clickParent('bbb')
  }
  render() {
    return (
      <div>
        父组件向子组件传的值是：{this.props.str}
        <button onClick={this.handleParent}>向父组件传值</button>
      </div>
    );
  }
}
