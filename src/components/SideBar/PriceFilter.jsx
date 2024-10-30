import React from "react";
import Draggable from "react-draggable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneParam } from "../../reducers/routesParamsSlice";

export default function PriceFilter() {
  const dispatch = useDispatch();
  const nodeRef = React.useRef(null);

  const price_from = useSelector((state) => state.routesParamsSlice.price_from);
  const price_to = useSelector((state) => state.routesParamsSlice.price_to);

  const [x, setX] = useState(price_from);
  const [z, setZ] = useState(price_to);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaZ, setDeltaZ] = useState(246);

  const handlePrice_from = (e, data) => {
    setDeltaX(deltaX + data.deltaX);
    setX(x + Math.round((data.deltaX / 246) * 15000));
  };

  const handlePrice_to = (e, data) => {
    setDeltaZ(deltaZ + data.deltaX);
    setZ(z + Math.round((data.deltaX / 246) * 15000));
  };

  useEffect(() => {
    dispatch(setOneParam({ key: "price_from", value: x }));
  }, [x]);

  useEffect(() => {
    dispatch(setOneParam({ key: "price_to", value: z }));
  }, [z]);

  return (
    <div className="price-filter">
      <h2 className="price-filter-title">Cтоимость</h2>
      <span className="start-cost-title">От</span>
      <span className="max-cost-title">До</span>
      <div className="circle-container">
        <Draggable
          nodeRef={nodeRef}
          axis="x"
          bounds={{ left: 0, right: 246 }}
          onDrag={handlePrice_from}
        >
          <div className="circle-1" ref={nodeRef}></div>
        </Draggable>
        <div className="line-gray"></div>
        <Draggable
          nodeRef={nodeRef}
          axis="x"
          bounds={{ left: -246, right: 0 }}
          onDrag={handlePrice_to}
        >
          <div ref={nodeRef} className="circle-2"></div>
        </Draggable>
      </div>
      <div className="cost-container">
        <div className="start-cost handle" style={{ left: deltaX }}>
          {price_from}
        </div>
        <div className="limit-cost" style={{ left: deltaZ - 40 }}>
          {price_to}
        </div>
      </div>
    </div>
  );
}