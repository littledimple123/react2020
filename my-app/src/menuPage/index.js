import React from 'react'
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu
const { Header,Content, Sider } = Layout
export default class MenuPage extends React.Component {
  constructor(prop) {
    super(prop)
  }
  render () {
    return (
      <div className='content'>
        <Layout>
          <Header className='header'>
            <div className='logo'></div>
            <Menu theme='dark' mode='horizontal' defaultselectkeys={['1']}>
              <Menu.Item key='1'>nav1</Menu.Item>
              <Menu.Item key='2'>nav2</Menu.Item>
              <Menu.Item key='3'>nav3</Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <div className='contentbox'>
          <Sider width={200} className='site-layout-background'>
            <Menu
              theme='dark'
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key='sub1' icon={<UserOutlined />} title='subnav 1'>
                <Menu.Item key='1'>options 1</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </div>
      </div>
    );
  }
}