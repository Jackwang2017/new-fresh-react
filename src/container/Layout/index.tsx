import React, { Component } from 'react';
import { Layout, Menu, Avatar, MenuProps } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.less';
const { Header, Sider, Content, Footer } = Layout;

// type MenuItem = Required<MenuProps>['items'][number];

class LayoutBox extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider className='layout-menu' trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >管理菜单标题</div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',

              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
                children: [
                  { label: '一级菜单' },
                  { label: '二级菜单' },
                  { label: '三级菜单' },
                ]
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
                children: [
                  { label: '一级菜单' },
                  { label: '二级菜单' },
                  { label: '三级菜单' },
                ]
              },
            ] as MenuProps['items']}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <div className='layout-admin'>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              超级管理员
            </div>
          </Header>
          <Content
            className="layout-content"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
          <Footer>@copyright 上海XXX股份制有限责任公司</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutBox;