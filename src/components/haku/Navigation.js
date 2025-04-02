import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "../layout/partials/Logo";
import "../../css/haku-navigation.scss";
import { OnScroll } from "../../App";

const Header = ({}) => {
  OnScroll();
  const [isActive, setIsactive] = useState(false);
  const [hide, setHide] = useState(false);
  var selectedBtn = new URLSearchParams(window.location.search).get("page");
  if (selectedBtn == "" || selectedBtn == null) {
    selectedBtn = "Home";
  }
  const nav = useRef(null);
  const hamburger = useRef(null);
  var isHide = false;

  var previous = 1000;
  window.scroll(0, 0);
  window.onscroll = (e) => {
    if (window.scrollY < previous) {
      if (isHide) {
        isHide = false;
        // setHide(false);
      }
      document.getElementById("haku-nav-bar").style.top = "0%";
      previous = window.scrollY;
    } else if (window.scrollY > previous) {
      if (!isHide) {
        isHide = true;
        // setHide(true)
      }
      document.getElementById("haku-nav-bar").style.top = "-20%";
      previous = window.scrollY;
    }
  };

  // window.onwheel = (e) => {
  //   if (e.deltaY < 0) {
  //     if (isHide) {
  //       isHide = false;
  //       // setHide(false);
  //     }
  //     document.getElementById("haku-nav-bar").style.top = "0%";
  //     previous = window.scrollY;
  //   } else if (e.deltaY > 0) {
  //     if (!isHide) {
  //       isHide = true;
  //       // setHide(true)
  //     }
  //     document.getElementById("haku-nav-bar").style.top = "-20%";
  //     previous = window.scrollY;
  //   }
  // };
  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = (data = "") => {
    if (data != "") {
      // selectedBtn = data;
    }
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames("site-header", "" && "has-bottom-divider", "");
  var btnDatas = [
    {
      name: "About",
      to: "About",
    },
    {
      name: "Projects",
      to: "Projects",
    },
    {
      name: "Contact",
      to: "Contact",
    },
  ];
  var btns = [];
  for (let i = 0; i < btnDatas.length; i++) {
    let classN = "button-wide-mobile button-sm nav-btn-base";
    if (selectedBtn == btnDatas[i].name) {
      classN += " actived";
    } else {
      classN += " nav-btn";
    }
    btns.push(
      <li>
        {/* <Link
          to={btnDatas[i].to}
          className={classN}
          onClick={() => closeMenu(btnDatas[i].name)}
        >
          <label className="nav-btn-text">{btnDatas[i].name}</label>
        </Link> */}

        <a className={classN} href={"index.html?page=" + btnDatas[i].to}>
          <label className="nav-btn-text">{btnDatas[i].name}</label>
        </a>
      </li>
    );
  }
  return (
    <div className={classNames("nav-head")} id="haku-nav-bar">
      <header className={classes}>
        <div className="container">
          <div
            className={
              classNames("site-header-inner", "" && "has-bottom-divider") +
              " nav-backGround"
            }
          >
            {/* ///// */}
            {/* <div
              className={classNames("wave-hero", isActive && "waveActive")}
              id="particles-js"
            >
              <div className="w wave4"></div>
              <div className="w wave3"></div>
              <div className="w wave2"></div>
              <div className="wave-background"></div>
            </div> */}
            {/* ////// */}
            <div className="nav-bar-logo ">
              <Logo />
            </div>
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle media-700 nav-menu-btn"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger nav-menu-btn-icon">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-left">
                  <ul className="list-reset header-nav-right">{btns}</ul>
                </div>
              </nav>
            </>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
