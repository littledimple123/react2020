import React from 'react'
export default class ListChild extends React.Component {
  constructor(prop) {
    super(prop)
  }
  render () {
    return (
      <React.Fragment>
        <div>父组件向子组件传的值是：{this.props}</div>
      </React.Fragment>
    );
  }
}