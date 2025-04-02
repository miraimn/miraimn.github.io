import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import "../../css/haku-navigation.scss";

var selectedBtn = window.location.href.split("/")[3];

const Header = ({}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

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
      selectedBtn = data;
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
      to: "/About",
    },
    {
      name: "Games",
      to: "/Games",
    },
    {
      name: "Contact",
      to: "/Contact",
    },
    {
      name: "ThreeJs",
      to: "/Three",
    },
  ];
  var btns = [];
  for (let i = 0; i < btnDatas.length; i++) {
    let classN = "button-wide-mobile button-sm btn5";
    if (selectedBtn == btnDatas[i].name) {
      classN += " actived";
    } else {
      classN += " nav-btn";
    }
    btns.push(
      <li>
        <Link
          to={btnDatas[i].to}
          className={classN}
          onClick={() => closeMenu(btnDatas[i].name)}
        >
          <label className="nav-btn-text">{btnDatas[i].name}</label>
        </Link>
      </li>
    );
  }
  return (
    <div className="nav-head">
      <header className={classes}>
        <div className="container">
          <div
            className={
              classNames("site-header-inner", "" && "has-bottom-divider") +
              " nav-backGround"
            }
          >
            {/* ///// */}
            <div
              className={classNames("wave-hero", isActive && "waveActive")}
              id="particles-js"
            >
              <div className="w wave2"></div>
              <div className="w wave3"></div>
              <div className="w wave4"></div>
              <div className="wave-background"></div>
            </div>
            {/* ////// */}

            <Logo />
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
                  <ul className="list-reset header-nav-left">{btns}</ul>
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
