import React, { useRef, useEffect } from "react";
import { useLocation, Switch, Router, Route } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import "./css/bootstrap.min.css";
// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Triangles from "./views/Triangles";
import Home from "./views/Home";
import ThreeJs from "./views/ThreeJs";
import HakuTest from "./views/HakuTest";
import Tuvshuu from "./views/TuvshuuPlayground";
import About from "./views/About";
import Contact from "./views/Contact";
import Games from "./views/Games";
import EnvironmentTest from "./views/Environment";
import HakuT from "./views/Haku";
import { delay } from "lodash";
import Haku3d from "./views/HakuTest3d";

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export function OnScroll() {
  var elems = document.querySelectorAll(
    ".haku-from-bottom, .haku-from-top, .haku-from-left, .haku-from-right, .haku-from-scale"
  );
  var revealPoint = 0;
  var windowHeight = window.innerHeight;
  var delta = windowHeight + revealPoint;
  elems.forEach((i) => {
    let delay = i.getAttribute("haku-ani-delay");
    if (delay == null) {
      delay = 0;
    }
    if (i.getBoundingClientRect().top < delta) {
      if (!i.classList.contains("haku-from-active")) {
        setTimeout(() => {
          i.classList.add("haku-from-active");
        }, delay);
      }
    } else {
      i.classList.remove("haku-from-active");
    }
    if (i.getBoundingClientRect().bottom < 0) {
      i.classList.remove("haku-from-active");
    }
  });

  elems = document.querySelectorAll(".haku-from-hide-ani");
  elems.forEach((i) => {
    let delay = i.getAttribute("haku-ani-delay");
    let rev = i.getAttribute("reverse");
    if (rev == null) {
      rev = false;
    }
    if (delay == null) {
      delay = 0;
    }
    let className = "haku-from-hide-ani-active" + (rev == 0 ? "2" : "");
    if (i.getBoundingClientRect().top < delta) {
      if (!i.classList.contains(className)) {
        setTimeout(() => {
          i.classList.add(className);
        }, delay);
      }
    }
  });
}

function SetReveal() {
  window.removeEventListener("scroll", OnScroll);
  window.addEventListener("scroll", OnScroll);
}

SetReveal();

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} />
          {/* <AppRoute exact path="/Three" component={ThreeJsPlayground} /> */}
          <AppRoute exact path="/Haku" component={HakuTest} />
          <AppRoute exact path="/Haku3d" component={Haku3d} />
          <AppRoute exact path="/Haku2" component={HakuT} />
          <AppRoute exact path="/Tuvshuu" component={Tuvshuu} />
          <AppRoute exact path="/Env" component={EnvironmentTest} />
          <AppRoute
            exact
            path="/About"
            component={About}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/Contact"
            component={Contact}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/Projects"
            component={Games}
            layout={LayoutDefault}
          />
        </Switch>
      )}
    />
  );
  // return (<HakuT></HakuT>)
};

export default App;
