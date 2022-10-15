
import image from '../../image/hero-image.png'
import './HeroContainer.css'
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Upload, } from "antd";
import { PlusOutlined,MailOutlined,LockOutlined   } from '@ant-design/icons';
import { Modal } from 'antd';

import 'antd/dist/antd.css'


const HeroContainer = () => {

  const [isModalOpen,setIsModalOpen]=useState(false)
  const [form] = Form.useForm()

  // useEffect(() => {
  //   if (!editProduct) return
  //   form.setFieldsValue(editProduct)

  // }, [form, editProduct])




  const showModalReg = () => {
   setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
    
    form.resetFields()
  }



  const onFinish = (values) => {
    setIsModalOpen(false);

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const title = 'Зарегистрироваться'
  const modalTitle = 'Регистрация'
  return (
    <div className='hero-container'>
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Gift.me</h2>
          <h3 className='title-text'>Мы воплощаем в подарках вашу любовь!</h3>
        </div>

        <div className="hero-buttons">
          <div className='button-enter'>
          <button className='enter'>Вход</button>
          </div>

          <div className='button-login'>

          <button type="primary" onClick={showModalReg}>Регистрация</button>
          </div>
          <div>
          <Modal
        footer={null} title={modalTitle} open={isModalOpen} onCancel={closeModal}>
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          

        > 
          <Form.Item
            // label="Адрес электронной почты"
            name="email"
            

            rules={[
              {
                required: true,
                message: "Пожалуйста введите электронную почту!",
              },
            ]}
          >
            <Input
            prefix={<MailOutlined className='input-icon'/> }
            type="email"
            placeholder="Почта"/>
          </Form.Item>

          <Form.Item
          

            name="password"

            rules={[
              {
                required: true,
                message: "Пожалуйста введите пароль!",
              },
            ]}
          >
            <Input 
            prefix={<LockOutlined className='input-icon'/>}
             type="password"
             placeholder="Пароль"/>
          </Form.Item>
          <Form.Item
            // label="Потвердить пароль"

            name="confirm_password"

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
            prefix={<LockOutlined className='input-icon'/>}
            type="password"
            placeholder="Повторить пароль"/>
          </Form.Item>

          
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={closeModal}>
              {title}
            </Button>
          </Form.Item>
        </Form>
      </Modal>

          </div>
        </div>

      </div>

      <div className="hero-image">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default HeroContainer