import React from 'react'
export default class StatusOne extends React.Component {
  constructor(prop) {
    super(prop)
  }
  render () {
    return (
      <div>
        父组件分发状态：
        {Number(this.props.value)/2}
      </div>
    );
  }
}