import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button type="button" className="element__image_button">
        <img src={props.card.link} onClick={handleClick} className="element__image" />
      </button>
      <div className="element__content">
        <h2 className="element__content-text">{props.card.name}</h2>
        <div className="element__like-group">
          <button
            aria-label="Лайк"
            type="button"
            className="element__content-like"
          ></button>
          <span className="element__like-counter">
            {props.card.likes.length}
          </span>
        </div>
        <button
          aria-label="Удалить"
          type="button"
          className="element__content-basket"
        ></button>
      </div>
    </li>
  );
}

export default Card;
