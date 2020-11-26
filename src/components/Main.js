import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

export function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([initialCards, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="section profile">
        <div className="profile__content">
          <div className="profile__image-group">
            <img
              src={userAvatar}
              alt="Аватар пользователя"
              className="profile__image"
            />
            <button
              onClick={props.onEditAvatar}
              className="profile__image-edit"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__info-title">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              className="profile__edit-button"
              aria-label="Закрыть"
            />
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__button"
        />
      </section>
      <section className="section elements">
        <ul className="elements__list">
          {cards.map((item) => (
            <Card key={item._id} card={item} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
