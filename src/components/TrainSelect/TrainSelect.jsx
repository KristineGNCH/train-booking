import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainsResult } from "../../reducers/trainsParamsSlice"; // проверьте, правильный ли путь импорта
import { getCities } from "../../api/cities"; // проверьте, правильный ли путь импорта
import Loading from "../Modal/Loading/Loading"; // проверьте, правильный ли путь импорта
import Error from "../Modal/Error/Error"; // проверьте, правильный ли путь импорта
import TrainsHead from "./TrainsHead"; // проверьте, правильный ли путь импорта
import TrainsList from "./TrainsList"; // проверьте, правильный ли путь импорта
import Pagination from "./Pagination"; // проверьте, правильный ли путь импорта

const TrainSelect = () => {
  const dispatch = useDispatch();
  const params = useSelector((state) => state.routesParamsSlice);
  const trainsList = useSelector(state => state.trainsParamsSlice?.trainsList || []);
  const [cities, setCities] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });

  const fetchCities = useCallback(async () => {
    setStatus({ loading: true, error: null });
    try {
      const result = await getCities(makeArgs(params));
      setCities(result);
      dispatch(setTrainsResult(result));
    } catch (err) {
      setStatus({ loading: false, error: err.message });
    } finally {
      setStatus(prev => ({ ...prev, loading: false }));
    }
  }, [params, dispatch]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      fetchCities();
    }

    return () => {
      isMounted = false;
    };
  }, [fetchCities]);

  const handleRetry = useCallback(() => {
    fetchCities();
  }, [fetchCities]);

  let content;
  if (status.error) {
    content = <Error message={status.error} onRetry={handleRetry} />;
  } else if (status.loading) {
    content = <Loading />;
  } else if (trainsList && trainsList.length > 0) {
    content = (
      <>
        <TrainsHead count={trainsList.total_count || 0} />
        <TrainsList />
        <Pagination />
      </>
    );
  } else {
    content = (
      <div className="trains-no-trains">
        По вашему запросу ничего не найдено.
      </div>
    );
  }

  return <section className="trains">{content}</section>;
};

export default TrainSelect;