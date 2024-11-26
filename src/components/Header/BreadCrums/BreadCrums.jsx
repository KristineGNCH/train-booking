import './breadCrums.css'

export default function BreadCrums() {
  const path = window.location.pathname
  
  const styleSecondCrum = () => {
    if (path.indexOf('trainselect') !== -1 || path.indexOf('seatsselect') !== -1) {
      return "breadcrumb"
    } else {
      return "breadcrumb breadcrumb-active"
    }
  }

  const styleThirdCrum = () => {
    if (path.indexOf('passengers') !== -1 || path.indexOf('personaldata') !== -1 || path.indexOf('payment') !== -1 || path.indexOf('confirmation') !== -1) {
      return "breadcrumb breadcrumb-active"
    } else {
      return "breadcrumb"
    }
  }

  const styleFourthCrum = () => {
    if (path.indexOf('confirmation') !== -1) {
      return "breadcrumb breadcrumb-active"
    } else {
      return "breadcrumb"
    }
  }

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs-list">
        <li className="breadcrumb breadcrumb-active">
          <a href="#">
            <span className="breadcrumb__number-list">1</span>
            <span>Билеты</span>
          </a>
        </li>
        <li className={styleSecondCrum()}>
          <a href="#">
            <span className="breadcrumb__number-list">2</span>
            <span>Пассажиры</span>
          </a>
        </li>
        <li className={styleThirdCrum()}>
          <a href="#">
            <span className="breadcrumb__number-list">3</span>
            <span>Оплата</span>
          </a>
        </li>
        <li className={styleFourthCrum()}>
          <a href="#">
            <span className="breadcrumb__number-list">4</span>
            <span>Проверка</span>
          </a>
        </li>
      </ul>
    </div>
  );
}