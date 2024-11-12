import { useDispatch, useSelector } from "react-redux"
import { setSelectSeats, resetSelectSeats} from '../../../reducers/seatsParamsSlice'
import First from "./First";
import Cupe from "./Cupe"
import Platzcart from "./Platzcart";
import Seat from "./Seat";

export default function SeatsSheme({ item }) {
  const dispatch = useDispatch()
  const typeVan = useSelector(state => state.vansParamsSlice.typeVan)

  const seatsCheck = useSelector(state => state.seatsParamsSlice.seats)
  //console.log(seatsCheck)

  const setSeatNum = (elem) => {
    if (seatsCheck.map(item => item.num === elem ? 'contain' : elem).indexOf('contain') === -1) {
      dispatch(setSelectSeats({ num: elem, price: item.coach.bottom_price }))
    } else {
      dispatch(resetSelectSeats(elem))
    }
  }
  
    const stylePlace = (elem) => {
    if (seatsCheck.map(item => item.num === elem ? 'contain' : elem).indexOf('contain') === -1) {
      return "available-place"
    } else {
      return "available-place booked"
    }
  } 
  
  
  const styleAvailable = (el) => {
    return el.available ?
      <li className={stylePlace(el.index)} key={el.index} onClick={() => setSeatNum(el.index)}>{el.index}</li> :
      <li className="place_is_taken" key={el.index}>{el.index}</li>
  }
  
  switch (typeVan) {
    case 'first':
      return <First item={item} styleAvailable={styleAvailable} key={"first"} />
    case 'second':
      return <Cupe item={item} styleAvailable={styleAvailable} key={"second"}/>
    case 'third':
      return <Platzcart item={item} styleAvailable={styleAvailable} key={"third"}/>
    case 'fourth':
      return <Seat item={item} styleAvailable={styleAvailable} key={"fourth"}/>
    default: 
      return (<div> Ошибка! Что-то пошло не так. </div>)
  }
}