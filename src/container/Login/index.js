import React, { Component } from 'react';
import { Input, Checkbox, Button, Form } from 'antd';
import './index.less';

class Login extends Component {
  constructor() {
    super();
  }
  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div>
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 6 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
          className="form-login"
        >
          <div className="login-title">登录3账户</div>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入您的名字!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入您的密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 10, span: 8}}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login;
