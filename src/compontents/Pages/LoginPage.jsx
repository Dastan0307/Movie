import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    function handleLogin() {
        login(username, password);
    };


  return (
    <div className='authUser'>
      <h1>Войти</h1>
      <div className='liner'></div>
      <div className='inp'>
        <p>Логин</p>
        <input id='usernameInp' className='input' type="text" placeholder='Введите логин' onChange={e => setUser(e.target.value)} />
        <p>Пароль</p>
        <input id='password' className='input' type="password" placeholder='Введите пароль' onChange={e => setPassword(e.target.value)} />
        <a href="#" onClick={() => navigate('/register')} >Забыли пароль?</a>
        <button className='btn' onClick={handleLogin}>Войти</button>
      </div>
    </div>
  )
}

export default LoginPage;
