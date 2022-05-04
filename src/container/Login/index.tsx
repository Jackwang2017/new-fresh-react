import React, { Component } from 'react';
import { Input, Checkbox, Button, Form } from 'antd';
import './index.less';

class Login extends Component {
  constructor(props: any) {
    super(props);
  }

  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
        <Form
          name="basic"
          labelCol={{ offset: 2, span: 8 }}
          wrapperCol={{ span: 6 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
          className='form-login'
        >
          <Form.Item
            wrapperCol={{ offset: 10, span: 6 }}
            className="login-title"
          >
            项目标题
          </Form.Item>
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: '请输入账号或姓名!' }]}
          >
            <Input placeholder='请输入' />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password placeholder='请输入'/>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 6 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
    )
  }
}

export default Login