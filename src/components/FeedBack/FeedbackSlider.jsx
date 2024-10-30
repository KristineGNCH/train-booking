import React, { useEffect, useState, createContext } from "react";
import FeedbackList from "./FeedbackList";
import Dots from "./Dots.jsx";

import "./FeedbackSlider.css";

export const SliderContext = createContext();

export default function Slider() {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };

  useEffect(() => {
    const list = require("../../service/FeedBack.json");
    setItems(sliceIntoChunks(list, 2));
  }, []);

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  return (
    <div className="slider_dots">
      <SliderContext.Provider
        value={{
          goToSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <FeedbackList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
}
