import React from 'react';
import { Form, Icon, Input, Button, Spin,Checkbox } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../stores/actions/auth';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class NormalLoginForm extends React.Component {
	render(){
		const onFinish = values => {
    console.log('Received values of form: ', values);
    this.props.onAuth(values.username,values.password)
  };
		return(

  <div>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>&nbsp;
         Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
  


			)
	}
}

const mapDispatchToProps = dispatch => {
	return {

		onAuth:(username,password) => dispatch(actions.authLogin(username,password))
	}
}

export default connect(mapDispatchToProps)(NormalLoginForm);
