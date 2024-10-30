import { useContext } from "react";
import FeedbackSlide from "./FeedbackSlide";
import { SliderContext } from "./FeedbackSlider";

export default function FeedbackList() {
  const { slideNumber, items } = useContext(SliderContext);

  const drowTwoItems = (items) => {
    return items.map((slide) => {
      if (slide.length > 1) {
        return (
          <div className="slide" key={slide[0].id}>
            <FeedbackSlide key={slide[0].id} data={slide[0]} />
            <FeedbackSlide key={slide[1].id} data={slide[1]} />
          </div>
        );
      } else {
        return (
          <div className="slide" key={slide[0].id}>
            <FeedbackSlide key={slide[0].id} data={slide[0]} />
          </div>
        );
      }
    });
  };
  const list = drowTwoItems(items);
  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {list}
    </div>
  );
}
