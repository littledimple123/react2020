import React from 'react'
export default class StatusOne extends React.Component {
  constructor(prop) {
    super(prop)
  }
  render () {
    return (
      <div>
        父组件分发状态：
        {this.props.value +1}
      </div>
    );
  }
}