import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContextProvider';
import '../../styles/auth.css'

const RegistrationPage = () => {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    const { register } = useAuth();

    function handleRegister() {
        register(username, password);
    };


  return (
    <div className='authUser' >
      <h1>Регистрация</h1>
      <div className='liner'></div>
      <div className='inp'>
        <p id='username'>Имя</p>
        <input id='usernameInp' className='input' placeholder='Введите логин' type="text" onChange={e => setUser(e.target.value)} />
        <p>Пароль</p>
        <input id='password' className='input' placeholder='Введите пароль' type="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleRegister} className='btn'>Далее</button>
      </div>
  </div>
  )
}

export default RegistrationPage;