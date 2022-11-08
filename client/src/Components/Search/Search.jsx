import React, { useState } from 'react';
import "./Search.scss";
import Modal from '../Modal/Modal';

function Search({ coaches }) {

  const [isVisible, setIsVisible] = useState(false);
  const [currentCoach, setCurrentCoach] = useState(null);
  const [activity, setActivity] = useState('Alive');

  const showModal = (id) => {
    setCurrentCoach(id);
    setIsVisible(true);
  }

  const hideModal = (e) => {
    if (e.target.className === 'modal' || e.target.className === 'close') {
      setIsVisible(false);
    }
  }

  const changeList = (e) => {
    setActivity(e.target.value);
  }

  const newCoaches = coaches.filter(function(coach) {
    return coach.status === activity;
  });
  
  return (
    <div className="coaches">
  
          <fieldset className="coaches__form">
            <label>
              <span>Выбор направления</span>
              <select onChange={changeList}>
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
            </label>
            <label>
              <span>Язык взаимодействия</span>
              <select>
                <option value="russian">Русский</option>
                <option value="kazakh">Казахский</option>
                <option value="english">Английский</option>
              </select>
            </label>
          </fieldset>

          <div className="coaches__list">
            { 
              newCoaches.map(item => (
                <div key={item.id} className='coaches__card' >
                  <img className='coaches__card-img' src={item.image} alt="personage" />
                  <h3>{item.name}</h3>
                  <button onClick={(e) => showModal(item.id)}>More...</button>
                  {(currentCoach === item.id) && isVisible ? <Modal data={item} hide={hideModal} /> : null}
                </div>
              ))
            }
          </div>
  
    </div>
  )
}

export default Search;