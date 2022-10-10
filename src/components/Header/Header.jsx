import React from 'react'
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import './Header.css'

export const Header = () => {
    const [modalActive, setModalActive] = useState(true);
  return (
    <header>
        <Modal active={modalActive} setActive={setModalActive} />
        <button className='btn' onClick={() => setModalActive(true)}>Регистрация</button>
    </header>
  )
}
