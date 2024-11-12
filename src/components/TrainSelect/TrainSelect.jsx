import TrainsHead from '../../components/TrainSelect/TrainsHead'
import { makeArgs } from '../../service/dataTransform';
import TrainsList from "../../components/TrainSelect/TrainsList";
import Pagination from "../../components/TrainSelect/Pagination";
import Error from '../../components/Modal/Error/Error'
import Loading from '../../components/Modal/Loading/Loading'
import { setTrainsResult } from '../../reducers/trainsParamsSlise';
import { useDispatch, useSelector } from "react-redux"
import { useGetRoutesQuery } from "../../api/api"
import './TrainSelect.css'


export default function TrainSelect() {
    const dispatch = useDispatch()
    const list = useSelector(state => state.routesParamsSlice)
    const trainsList = useSelector(state => state.trainsParamsSlice.trainsList)
  
    const args = makeArgs(list)

    const { currentData: result, isError, isFetching } = useGetRoutesQuery(args)
    
    if (isError) {
        return ( <Error />)
    }
    if (isFetching) {
        return (<Loading />)
    }
    if (result) {
        dispatch(setTrainsResult(result))
        
         return (
        <section className="trains">
                 <TrainsHead count={trainsList.total_count } />
                 <TrainsList />
            <Pagination />
        </section>
    )
    }

}