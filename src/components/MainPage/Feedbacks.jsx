import Slider from "../FeedBack/FeedbackSlider.jsx";

export default function Feedbacks() {
  return (
    <section className="feedbacks" id="feedbacks">
      <div className="container">
        <div className="feedbacks-title-block">
          <h2 className="feedbacks-title">ОТЗЫВЫ</h2>
        </div>
        <Slider />
      </div>
    </section>
  );
}