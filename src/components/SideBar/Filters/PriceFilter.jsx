import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { setOneParam } from "../../../reducers/routesParamsSlice";


export default function PriceFilter() {
  const dispatch = useDispatch();
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);

  const price_from = useSelector((state) => state.routesParamsSlice.price_from);
  const price_to = useSelector((state) => state.routesParamsSlice.price_to);

  const [x, setX] = useState(price_from || 0); 
  const [z, setZ] = useState(price_to || 15000); 
  const [deltaX, setDeltaX] = useState(0);
  const [deltaZ, setDeltaZ] = useState(246);

  const handlePrice_from = (e, data) => {
    const newValue = Math.round((data.deltaX / 246) * 15000);
    setX(Math.max(0, Math.min(newValue, z))); 
    setDeltaX(deltaX + data.deltaX);
  };

  const handlePrice_to = (e, data) => {
    const newValue = Math.round((data.deltaX / 246) * 15000);
    setZ(Math.max(x, Math.min(newValue, 15000))); 
    setDeltaZ(deltaZ + data.deltaX);
  };

  useEffect(() => {
    dispatch(setOneParam({ key: "price_from", value: x < 0 ? 0 : x })); 
  }, [x, dispatch]);

  useEffect(() => {
    dispatch(setOneParam({ key: "price_to", value: z > 15000 ? 15000 : z })); 
  }, [z, dispatch]);

  return (
    <div className="price-filter">
      <h2 className="price-filter-title">Cтоимость</h2>
      <span className="start-cost-title">От</span>
      <span className="max-cost-title">До</span>
      <div className="circle-container">
        <Draggable
          nodeRef={circleRef1}
          axis="x"
          bounds={{ left: 0, right: 246 }}
          onDrag={handlePrice_from}
        >
          <div className="circle-1" ref={circleRef1}></div>
        </Draggable>
        <div className="line-gray"></div>
        <Draggable
          nodeRef={circleRef2}
          axis="x"
          bounds={{ left: 0, right: 246 }}
          onDrag={handlePrice_to}
        >
          <div className="circle-2" ref={circleRef2}></div>
        </Draggable>
      </div>
      <div className="cost-container">
        <div className="start-cost handle" style={{ left: deltaX }}>
          {x}
        </div>
        <div className="limit-cost" style={{ left: deltaZ - 40 }}>
          {z}
        </div>
      </div>
    </div>
  );
}
