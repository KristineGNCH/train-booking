import React from "react";
import PropTypes from "prop-types";
import "./FeedbackSlider.css";

export default function FeedbackSlide({ data }) {
  const { name, text, photo, id } = data;

  return (
    <div className="feedbacks-items__item" key={id}>
      <div className="feedbacks-items__item__img">
        <img src={photo} alt={`${name}'s feedback`} />
      </div>
      <div className="feedbacks-items__item__text">
        <h3 className="feedbacks-items__item__text__title">{name}</h3>
        <p className="feedbacks-items__item__text-p">{text}</p>
      </div>
    </div>
  );
}

