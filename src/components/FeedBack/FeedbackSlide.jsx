import "./FeedbackSlider.css";

export default function FeedbackSlide({ data: { name, text, photo, id } }) {
    return (
      <div className="feedbacks-items__item">
        <div className="feedbacks-items__item__img">
          <img src={photo} alt="image" />
        </div>
        <div className="feedbacks-items__item__text">
          <h3 className="feedbacks-items__item__text__title">{name}</h3>
          <p className="feedbacks-items__item__text-p">
            {text}
          </p>
        </div>
      </div>
    );
  }