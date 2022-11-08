import React from 'react';
import './Authorization.scss';

const Authorization = ({ hide }) => {
  return (
    <div className='auth' onClick={hide}>
      <div className='auth__container'>
        <div onClick={hide} className="auth__close">X</div>

        <form action="" className='auth__form form'>
          <h3 className='form__title'>Войти в личный кабинет</h3>
          <input type="email" placeholder='Введите почту' className='form__input form__email' />
          <input type="password" placeholder='Введите пароль' className='form__input form__pass' />
          <input type="submit" value="Войти" className='form__submit' />
          <button className='auth__btn auth__repass-btn'>Забыли пароль</button>
          <button className='auth__btn auth__reg-btn'>Зарегистрироваться</button> 
        </form>

        
                
      </div>
    </div>
  );
};

export default Authorization;