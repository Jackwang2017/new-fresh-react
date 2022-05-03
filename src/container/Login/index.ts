import React, { FC } from 'react';
import { Input, Checkbox, Button, Form } from 'antd';
import './index.less';

const Login: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (error: any) => {
    console.log('Failed:', error)
  }

  return (
    <Form
      name="basic"
      labelCol={{span: 8}}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}

export default Login