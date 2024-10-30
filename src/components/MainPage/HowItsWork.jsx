import website from "../../assets/svg/globe-net.svg";
import office from "../../assets/svg/building.svg";
import computer from "../../assets/svg/computer.svg";

export default function HowItsWork() {
  return (
    <section className="how-its-work" id="howItsWork">
      <div className="container">
        <div className="how-its-work__part1">
          <a href="#" className="how-its-work__link">
            Как это работает
          </a>
          <button className="how-its-work__know-more">УЗНАТЬ БОЛЬШЕ</button>
        </div>
        <div className="how-its-work__part2">
          <div className="how-its-work__options">
            <div className="how-its-work__option1">
              <img src={website} alt="Удобный заказ на сайте" />
            </div>
            <span className="how-its-work__option-description">
              Удобный заказ на сайте
            </span>
          </div>
          <div className="how-its-work__options">
            <div className="how-its-work__option2">
              <img src={office} alt="Нет необходимости ехать в офис" />
            </div>
            <span className="how-its-work__option-description">
              Нет необходимости ехать в офис
            </span>
          </div>
          <div className="how-its-work__options">
            <div className="how-its-work__option3">
              <img src={computer} alt="Огромный выбор направлений" />
            </div>
            <span className="how-its-work__option-description">
              Огромный выбор направлений
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}