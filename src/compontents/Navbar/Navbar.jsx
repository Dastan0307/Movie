import React from 'react';
import '../../styles/navbar.css';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className="navbar_list">
          <div>
          <img src={logo} alt="Error" className='navbar_logo' onClick={() => navigate('/')} />
          </div>
        <div className='navbar_links'>
          <a href="#" onClick={() => navigate('/')} >Главная</a>
          <a href="#" className='navbar_link'>Библиотека</a>
        </div>
        <div className="navbar-btn-inp">
          <input type="search" placeholder='Поиск...' className='navbar_inp' />
          <div className="btn_register" onClick={() => navigate('/register')} >Регистрация</div>
          <div className="btn_login" onClick={() => navigate('/login')} >Войти</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar