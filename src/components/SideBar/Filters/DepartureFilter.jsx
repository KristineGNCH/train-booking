import React from "react";
import Draggable from "react-draggable";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { setOneParam } from "../../../reducers/routesParamsSlice";

export function DepartureFilter() {
  const dispatch = useDispatch();
  const nodeRef = React.useRef(null);

  const [timeDeparture, setTimeDeparture] = useState({
    from: 0,
    to: 24,
    pozFrom: 0,
    pozTo: 281,
  });
  const [timeArrival, setTimeArrival] = useState({
    from: 0,
    to: 24,
    pozFrom: 0,
    pozTo: 281,
  });

  const handleTimeDeparture = (e, data) => {
    setTimeDeparture({
      ...timeDeparture,
      pozFrom: timeDeparture.pozFrom + data.deltaX,
      from: Math.floor((timeDeparture.pozFrom / 281) * 24),
    });
    dispatch(
      setOneParam({
        key: "start_departure_hour_from",
        value: timeDeparture.from,
      })
    );
  };
  const handleTimeDepartureTo = (e, data) => {
    setTimeDeparture({
      ...timeDeparture,
      pozTo: timeDeparture.pozTo + data.deltaX,
      to: Math.floor((timeDeparture.pozTo / 281) * 24),
    });
    dispatch(
      setOneParam({ key: "start_departure_hour_to", value: timeDeparture.to })
    );
  };

  const handleTimeArrival = (e, data) => {
    setTimeArrival({
      ...timeArrival,
      pozFrom: timeArrival.pozFrom + data.deltaX,
      from: Math.floor((timeArrival.pozFrom / 281) * 24),
    });
    dispatch(
      setOneParam({ key: "start_arrival_hour_from", value: timeArrival.from })
    );
  };

  const handleTimeArrivalTo = (e, data) => {
    setTimeArrival({
      ...timeArrival,
      pozTo: timeArrival.pozTo + data.deltaX,
      to: Math.floor((timeArrival.pozTo / 281) * 24),
    });
    dispatch(
      setOneParam({ key: "start_arrival_hour_to", value: timeArrival.to })
    );
  };

  return (
    <>
      <div className="time-filter">
        <div className="departure_time-filters_container">
          <div className="time-filter_title-container">
            <div className="time-filter-main_title-wrapper">
              <span className="departure-vector"></span>
              <p className="time-filter-main_title">Туда</p>
            </div>
            <span className="closeUP-vector"></span>
          </div>
          <div className="departure-time">
            <h3 className="time-filter-title">Время отбытия</h3>
            <div className="circle-container time-container">
              <Draggable
                nodeRef={nodeRef}
                axis="x"
                bounds={{ left: 0, right: 281 }}
                onDrag={handleTimeDeparture}
              >
                <div className="time-circle-1" ref={nodeRef}></div>
              </Draggable>
              <div className="timeline-gray "></div>
              {/* <div
                  className="timeline-colored"
                  style={{ left: "2px", right: "128px" }}
                        ></div> */}
              <Draggable
                axis="x"
                nodeRef={nodeRef}
                bounds={{ left: -281, right: 0 }}
                onDrag={handleTimeDepartureTo}
              >
                <div className="time-circle-2" ref={nodeRef}></div>
              </Draggable>
            </div>
            <div className="cost-container time-container">
              <div
                className="start-cost"
                style={{ left: timeDeparture.pozFrom }}
              >
                {timeDeparture.from}:00
              </div>
              <div
                className="limit-cost"
                style={{ left: timeDeparture.pozTo - 50 }}
              >
                {timeDeparture.to}:00
              </div>
              {/* <div className="max-cost">24:00</div> */}
            </div>
          </div>

          <div className="arrival-time">
            <h3 className="time-filter-title arrival-title">Время прибытия</h3>
            <div className="circle-container time-container">
              <Draggable
                nodeRef={nodeRef}
                axis="x"
                bounds={{ left: 0, right: 281 }}
                onDrag={handleTimeArrival}
              >
                <div className="time-circle-1" ref={nodeRef}></div>
              </Draggable>
              <div className="timeline-gray"></div>
              {/* <div
              className="timeline-colored"
              style={{ left: "52px", right: "136px" }}
                      ></div> */}
              <Draggable
                nodeRef={nodeRef}
                axis="x"
                bounds={{ left: -281, right: 0 }}
                onDrag={handleTimeArrivalTo}
              >
                <div className="time-circle-2" ref={nodeRef}></div>
              </Draggable>
            </div>
            <div className="cost-container time-container">
              <div className="start-cost" style={{ left: timeArrival.pozFrom }}>
                {timeArrival.from}:00
              </div>
              <div
                className="limit-cost"
                style={{ left: timeArrival.pozTo - 50 }}
              >
                {timeArrival.to}:00
              </div>
              {/* <div className="max-cost">24:00</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}