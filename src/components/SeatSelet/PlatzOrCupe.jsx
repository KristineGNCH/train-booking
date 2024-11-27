import { useMemo } from "react";

export default function PlatzOrCupe({ item }) {
  const { coach, seats } = item;

  if (coach.class_type === "fourth" || coach.class_type === "first") {
    return null;
  }

  const availableSeats = useMemo(() => {
    const topSeats = seats.filter(
      (seat) => seat.index % 2 === 0 && seat.available
    ).length;
    const bottomSeats = seats.filter(
      (seat) => seat.index % 2 !== 0 && seat.available
    ).length;

    return { topSeats, bottomSeats };
  }, [seats]);

  return (
    <>
      <p className="seats-position">
        Верхние{" "}
        <span className="available-seats">{availableSeats.topSeats}</span>
      </p>
      <p className="seats-position">
        Нижние{" "}
        <span className="available-seats">{availableSeats.bottomSeats}</span>
      </p>
    </>
  );
}
