import React from "react";
import Header from "./Header";
import { Main } from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App(props) {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddCard] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setEditProfile(true);
  }

  function handleEditAvatarClick() {
    setAvatarPopup(true);
  }

  function handleAddPlaceClick() {
    setAddCard(true);
  }

  function handleCardClick(item) {
    setSelectedCard(item);
  }

  function closeAllPopups() {
    setEditProfile(false);
    setAvatarPopup(false);
    setAddCard(false);
    handleCardClick(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="profile"
        title="Редактировать профиль"
      >
        <label className="form__label">
          <input
            type="text"
            name="nameProfile"
            className="form__input form__input_type_name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <span className="form__error" id="nameProfile-error"></span>
        </label>
        <label className="form__label">
          <input
            type="text"
            name="aboutProfile"
            className="form__input form__input_type_about"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            autoComplete="off"
            required
          />
          <span className="form__error" id="aboutProfile-error"></span>
        </label>
        <button
          type="submit"
          name="saveButtonProfile"
          className="popup__save-button"
          disabled
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
      >
        <label className="form__label">
          <input
            type="url"
            name="avatar"
            className="form__input form__input_type_url"
            placeholder="Ссылка на картинку"
            autoComplete="off"
            required
          />
          <span className="form__error" id="avatar-error"></span>
        </label>
        <button
          type="submit"
          name="saveButtonAvatar"
          className="popup__save-button popup__save-button_disabled"
          disabled
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        name="card"
      >
        <label className="form__label">
          <input
            type="text"
            name="namePlace"
            className="form__input form__input_type_place"
            placeholder="Название"
            minLength="1"
            maxLength="30"
            autoComplete="off"
            required
          />
          <span className="form__error" id="namePlace-error"></span>
        </label>
        <label className="form__label">
          <input
            type="url"
            name="aboutPlace"
            className="form__input form__input_type_url"
            placeholder="Ссылка на картинку"
            autoComplete="off"
            required
          />
          <span className="form__error" id="aboutPlace-error"></span>
        </label>
        <button
          type="submit"
          name="saveButtonCard"
          className="popup__save-button popup__save-button_disabled"
          disabled
        >
          Сохранить
        </button>
      </PopupWithForm>
      {/*<PopupWithForm
        isOpen={}
        onClose={closeAllPopups}
        title="Вы уверены?"
        name="delete"
      >
        <button type="submit" className="popup__save-button">
          Да
        </button>
      </PopupWithForm>*/}
      <ImagePopup
        card={selectedCard}
        isOpen={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
