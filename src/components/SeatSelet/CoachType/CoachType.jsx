export default function CoachType({ item }) {
  if (item.coach.class_type === "sitting" || item.coach.class_type === "luxe") {
    return null;
  }

  const sortTopSeat = () => {
    const arr = item.seats.filter(
      (elem) => elem.index % 2 === 0 && elem.available
    );
    return arr.length;
  };

  const sortBottomSeat = () => {
    const arr = item.seats.filter(
      (elem) => elem.index % 2 !== 0 && elem.available
    );
    return arr.length;
  };

  return (
    <>
      <p className="seats">Верхние <span className="available-seats">{sortTopSeat()}</span>
      </p>
      <p className="seats">Нижние <span className="available-seats">{sortBottomSeat()}</span>
      </p>
    </>
  );
}
