import website from "../../assets/svg/globe-net.svg";
import office from "../../assets/svg/building.svg";
import computer from "../../assets/svg/computer.svg";

export default function HowItsWork() {
  return (
    <section className="how-it-works" id="howItWorks">
      <div className="container">
        <div className="how-it-works__head-wrapper">
          <h2  className="how-it-works__title">
            Как это работает
          </h2>
          <button className="how-it-works__button">УЗНАТЬ БОЛЬШЕ</button>
        </div>
        <div className="how-it-works__wrapper">
          <div className="how-it-works__options">
            <div className="how-it-works__option1">
              <img src={website} alt="image" />
            </div>
            <span className="how-it-works__option-description">
              Удобный заказ на сайте
            </span>
          </div>
          <div className="how-it-works__options">
            <div className="how-it-works__option2">
              <img src={office} alt="image" />
            </div>
            <span className="how-it-works__option-description">
              Нет необходимости ехать в офис
            </span>
          </div>
          <div className="how-it-works__options">
            <div className="how-it-works__option3">
              <img src={computer} alt="image" />
            </div>
            <span className="how-it-works__option-description">
              Огромный выбор направлений
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}