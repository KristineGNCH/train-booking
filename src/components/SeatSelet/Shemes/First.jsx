export default function First({ item, styleAvailable }) {
    return (
      <div className="seats-scheme standart luxury-wagon">
        <span className="scheme_wagon-number">07</span>
        <ul className="scheme_bottom-seats">
          {item.seats.map((el) => {
            return styleAvailable(el);
          })}
        </ul>
      </div>
    );
  }