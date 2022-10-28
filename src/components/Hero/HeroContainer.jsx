import image from '../../image/hero-image.png'
import './HeroContainer.css'
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import 'antd/dist/antd.css'

const HeroContainer = () => {

  const [isModalOpenReg, setIsModalOpenReg] = useState(false)
  const [isModalOpenLog, setIsModalOpenLog] = useState(false)
  const [form] = Form.useForm()

  const showModalReg = () => {
    setIsModalOpenLog(false);
    console.log('show modal');
    setIsModalOpenReg(true);
  };

  const closeModalReg = () => {
    setIsModalOpenReg(false);
    form.resetFields()
  }

  const showModalLog = () => {
    setIsModalOpenReg(false);
    console.log('show modal log');
    setIsModalOpenLog(true);
  };

  const closeModalLog = () => {
    setIsModalOpenLog(false);
    form.resetFields()
  }

  const onFinishReg = (values) => {
    setIsModalOpenReg(false);
    form.resetFields()
  };

  const onFinishLog = (values) => {
    setIsModalOpenLog(false);
    form.resetFields()
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    form.resetFields()
  };

  return (
    <div className='hero-container'>
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Gift.me</h2>
          <div className='title-text-wrapper'>
          <h3 className='title-text'>Мы воплощаем в подарках вашу любовь!</h3>
          </div>
        </div>
        <div className="hero-buttons">
          <div className='button-enter'>
            <button className='enter' onClick={() => showModalLog()}>Вход</button>
          </div>
          <div className='button-login'>
            <button className='register' onClick={() => showModalReg()}>Регистрация</button>
          </div>
          <div>
            <Modal footer={null} title='Регистрация' open={isModalOpenReg} onCancel={closeModalReg}>
              <Form
                form={form}
                name="basic"
                onFinish={onFinishReg}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item name="email"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста введите электронную почту!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className='input-icon' />}
                    type="email"
                    placeholder="Почта" />
                </Form.Item>

                <Form.Item name="password"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста введите пароль!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className='input-icon' />}
                    type="password"
                    placeholder="Пароль" />
                </Form.Item>
                <Form.Item name="confirm_password"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста введите пароль для потверждения!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className='input-icon' />}
                    type="password"
                    placeholder="Повторить пароль" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" onClick={closeModalReg}>
                    Зарегистрироваться
                  </Button>
                </Form.Item>
              </Form>
            </Modal>

            <Modal footer={null} title='Вход' open={isModalOpenLog} onCancel={closeModalLog}>
              <Form
                form={form}
                name="basic"
                onFinish={onFinishLog}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item name="email"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста введите электронную почту!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className='input-icon' />}
                    type="email"
                    placeholder="Почта" />
                </Form.Item>

                <Form.Item name="password"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста введите пароль!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className='input-icon' />}
                    type="password"
                    placeholder="Пароль" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" onClick={closeModalLog}>
                    Войти
                  </Button>
                  <Button htmlType="submit" onClick={showModalReg}>
                    Зарегистрироваться
                  </Button>
                  <div className='forgot-wrapper'>
                    <a className='forgot-link' href="">Забыли пароль?</a>
                  </div>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img className='hero-image-self' src={image} alt="" />
      </div>
    </div>
  )
}

export default HeroContainer