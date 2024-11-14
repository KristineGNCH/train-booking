export function Facilities({ item }) {
    return (
      <ul className="facilities-list">
        <li
          data-title="Кондиционер"
          className={
            item.coach.have_air_conditioning
              ? "facilities-vector conditioner conditioner-included"
              : "facilities-vector conditioner"
          }
        ></li>
  
        <li
          data-title="Wi-Fi"
          className={
            item.coach.have_wifi
              ? "facilities-vector wifi active wifi-included"
              : "facilities-vector wifi"
          }
        ></li>
  
        <li
          data-title="Белье"
          className={
            item.coach.is_linens_included
              ? "facilities-vector bedShits included bedShits-included"
              : "facilities-vector bedShits included"
          }
        ></li>
  
        <li
          data-title="Питание"
          className={
            item.coach.is_linens_included
              ? "facilities-vector food food-included"
              : "facilities-vector food"
          }
        ></li>
      </ul>
    );
  }