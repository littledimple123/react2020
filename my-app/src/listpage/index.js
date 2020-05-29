import React from 'react'
// import ListChild from '../components/listChild'
export default class ListPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='App'>
        <h1>list-Page</h1>
        <h2>父组件向子组件传值</h2>
        {/* <React.Fragment>
          <ListChild str='我是父组件传过来的值'></ListChild>
        </React.Fragment> */}
      </div>
    );
  }
}