import React from 'react';

const Main = () => {
    return (
        <main>
        <section className="profile">
          <div className="profile__items">
            <button className="profile__edit-photo">
              <img
                src="<%=require('./images/avatar.jpg')%>"
                alt="Аватар пользователя"
                className="profile__image"
              />
            </button>
            <div className="profile__info">
              <div className="profile__item">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button
                  className="button profile__button-edit"
                  type="button"
                ></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
          </div>
          <button className="button profile__button-add" type="button"></button>
        </section>
        <section className="elements"></section>
      
      </main>
    );
};

export default Main;