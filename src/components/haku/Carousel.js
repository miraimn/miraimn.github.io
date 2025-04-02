import React, { useEffect, useState } from "react";
import "../../css/haku-carouse.scss";
import "../../index";
import arrow from "../../assets/images/arrow.png";
import Card1 from "../elements/Card1";

const MAX_VISIBILITY = 3;

var switchDuration = "0.3f";

var OtherCardClicked = (i) => {};

let child = [];
var selectedCard = 0;

var progress = "";
var number;

var OnScroll = (event) => {};

function ArrowBtn() {
  return (
    <>
      <img src={arrow} className="corousel-arrow"></img>
    </>
  );
}

function GetChildIndex(num) {
  for (let i = 0; i < child.length; i++) {
    if (child[i].props.num == num) {
      return i;
    }
  }
  return -1;
}

const Carousel = ({ children }) => {
  // console.log(child);
  const [active, setActive] = useState(selectedCard);
  function ClickRight(num = 1) {
    selectedCard++;
    if (selectedCard >= child.length) {
      selectedCard -= child.length;
    }
    switchDuration = "0s";
    progress = "right";
    number = num;
    setActive((i) => i - 1);
    child.push(child.shift());
    setTimeout(() => {
      switchDuration = "0.3s";
      setActive((i) => i + 1);
      num--;
      if (num > 0) {
        ClickRight(num);
      }
    }, 0.01);
  }
  function ClickLeft(num = 1) {
    selectedCard--;
    if (selectedCard < 0) {
      selectedCard += child.length;
    }
    switchDuration = "0s";
    setActive((i) => i + 1);
    child.unshift(child.pop());
    setTimeout(() => {
      switchDuration = "0.3s";
      setActive((i) => i - 1);
      num--;
      if (num > 0) {
        ClickLeft(num);
      }
    }, 0.01);
  }
  OtherCardClicked = (num) => {
    var n = GetChildIndex(num) - GetChildIndex(selectedCard);

    if (n > 0) {
      ClickRight(Math.abs(n));
    } else if (n < 0) {
      ClickLeft(Math.abs(n));
    }
  };
  var dragStartX;
  var dragValue = 100;
  function OnDrag(e) {
    if (
      e.targetTouches[0].pageX > dragStartX &&
      e.targetTouches[0].pageX - dragStartX > dragValue
    ) {
      ClickLeft(1);
      dragStartX = e.targetTouches[0].pageX;
    } else if (
      e.targetTouches[0].pageX < dragStartX &&
      dragStartX - e.targetTouches[0].pageX > dragValue
    ) {
      ClickRight(1);
      dragStartX = e.targetTouches[0].pageX;
    }
  }

  return (
    <div
      className="carousel-caMain"
      onTouchMove={(e) => OnDrag(e)}
      onTouchStart={(e) => {
        dragStartX = e.targetTouches[0].pageX;
      }}
    >
      <div className="corousel-carousel">
        {React.Children.map(children, (child, i) => (
          <div
            className="corousel-card-container"
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "--duration": switchDuration,
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            {child}
          </div>
        ))}
        <div className="corousel-nav corousel-left" onClick={() => ClickLeft()}>
          <ArrowBtn />
        </div>
        <div
          className="corousel-nav corousel-right"
          onClick={() => ClickRight()}
        >
          <ArrowBtn />
        </div>
      </div>
    </div>
  );
};

/////////////

function CarouselApp(props) {
  // child = [];
  for (var i = 0; i < props.data.length; i++) {
    var a = "card" + i;
    child.push(
      <Card1
        num={i}
        data={props.data[i]}
        onClick={(i) => {
          OtherCardClicked(i);
        }}
      ></Card1>
    );
  }
  selectedCard = Math.floor(child.length / 2);
  console.log(child);
  return (
    <div className="corousel-app" onWheel={OnScroll}>
      <Carousel>{child}</Carousel>
    </div>
  );
}

export default CarouselApp;
