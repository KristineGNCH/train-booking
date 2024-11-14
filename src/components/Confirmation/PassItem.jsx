export default function PassItem({ item }) {
    const drowFullName = () => {
      return `${item["first-name_title"]} ${item["first-name_title"]} ${item["last-name_title"]}`;
    };
  
    const drowGender = () => {
      if (item.gender === "female") {
        return "женский";
      }
      if (item.gender === "male") {
        return "мужской";
      }
    };
  
    const drowPass = () => {
      if (item.passport === "passRF") {
        return "Паспорт РФ";
      } else {
        return "Заграничный паспорт";
      }
    };
  
    return (
      <li>
        <div className="passenger-type-wrap">
          <span className="passenger-vector-big"></span>
          <span className="passenger-type">
            {item.category === "adult" ? "Взрослый" : "Детский"}
          </span>
        </div>
        <div className="passenger-description">
          <p>
            <span>{drowFullName()}</span>
          </p>
          <p>Пол: {drowGender()}</p>
          <p>Дата Рождения: {item.date}</p>
          <p>
            {drowPass()} {item.passSeria} {item.passNum}
          </p>
        </div>
      </li>
    );
  }