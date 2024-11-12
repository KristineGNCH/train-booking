export default function PlatzOrCupe({ item }) {
    if (item.coach.class_type === 'fourth' || item.coach.class_type === 'first') {
        return null
    }
 
    //верхние места чётные
    const sortTopSeat = () => {
        const arr = item.seats.filter(elem => elem.index % 2 === 0 && elem.available)
        return arr.length
    }

    const sortBottomSeat = () => {
        const arr = item.seats.filter(elem => elem.index % 2 !== 0 && elem.available)
        return arr.length
    }

    return (<><p className="seats-position">
            Верхние <span className="available-seats">{sortTopSeat()}</span>
          </p>
          <p className="seats-position">
            Нижние <span className="available-seats">{sortBottomSeat()}</span>
          </p></>
         
    )
}