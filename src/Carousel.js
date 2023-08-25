import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title , currIdx = 0}) {
  const [currCardIdx, setCurrCardIdx] = useState(currIdx);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  function renderLeftArrow() {
    if(currCardIdx > 0){
      return <i
      className="bi bi-arrow-left-circle"
      onClick={goBackward}
    />;
    }
  }

  function renderRightArrow() {
    if(currCardIdx < photos.length-1){
      return <i
      className="bi bi-arrow-right-circle"
      onClick={goForward}
    />
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {renderLeftArrow()}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {renderRightArrow()}
      </div>
    </div>
  );
}

export default Carousel;
