import React, { useState } from 'react';
import Input from '../../Utils/Input/Input';
import { registration } from '../../Actions/User';
import "./Registration.scss";

const Registraition = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="container">
        <fieldset className='reg-form'>
          <legend>Регистрация профия тренера</legend>
          <div className="reg-form__wrapper">
            <div className="reg-form__col1">
              {/* <label>
                <span>Имя</span>
                <input type="text" placeholder='Введите ваше имя'></input>
              </label>
              <label>
                <span>Номер телефона</span>
                <input type="tel" placeholder='Введите номер телефона'></input>
              </label>
              <label>
                <span>Выбор направления</span>
                <select>
                  <option value="Alive">Фитнес</option>
                  <option value="unknown">Кроссфит</option>
                  <option value="Dead">Бег</option>
                </select>
              </label>
              <label>
                <span>Формат взаимодействия</span>
                <select>
                  <option value="plan">Тренировочный план</option>
                  <option value="online">Онлайн</option>
                  <option value="offline">Офлайн</option>
                </select>
              </label> */}
              <label>
                <span>Пароль</span>
                <Input value={password} setValue={setPassword} type="password" placeholder='Введите пароль'/>
              </label>
            </div>

            <div className="reg-form__col2">
              {/* <label>
                <span>Фамилия</span>
                <input type="text" placeholder='Введите фамилию'></input>
              </label> */}
              <label>
                <span>Электронный адрес</span>
                <Input value={email} setValue={setEmail} type="mail" placeholder='Введите почту'/>
              </label>
              {/* <label>
                <span>Язык взаимодействия</span>
                <select>
                  <option value="Alive">Русский</option>
                  <option value="unknown">Казахский</option>
                  <option value="Dead">Английский</option>
                </select>
              </label>
              <label>
                <span>Instagram</span>
                <input type="text" placeholder='Введите ваш Instagram'></input>
              </label>
              <label>
                <span></span>
                <input type="password" placeholder='Повторите пароль'></input>
              </label> */}
            </div>

            <div className="reg-form__col3">
              <textarea name="" id="" cols="80" rows="16"></textarea>
              <button>Загрузить фото профиля</button>
            </div>
          </div>
          <button className='reg-form__submit-btn' onClick={() => registration(email, password)}>Зарегистрироваться</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Registraition;