import React, { useRef, useEffect } from "react";
import { useLocation, Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
import Header from "./components/haku/Navigation";
import Footer from "./components/haku/Footer";
import Terms from "./views/Terms";
import AppAds from "./views/AppAds";

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
// console.log(url);
const App = () => {
  useEffect(() => {
    OnScroll();
    SetReveal();
  }, []);
  var urlpar = new URLSearchParams(window.location.search);
  var page;
  switch (urlpar.get("page")) {
    case "Home":
      page = <Home />;
      break;
    case "About":
      page = <About />;
      break;
    case "Projects":
      page = <Games />;
      break;
    case "Contact":
      page = <Contact />;
      break;
    case "haku":
      page = <Haku3d />;
      break;
    case "terms":
      page = <Terms />;
      break;
    case "app-ads":
      window.location.href = "/app-ads.txt";
      return null;
      break;
    default:
      page = <Home />;
      break;
  }
  return (
    <Router>
      <div>
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <main className="site-content">
          <Switch>
            <Route exact path="/" render={() => page} />
            <Route path="/terms" render={() => {
              window.location.href = "/terms.html";
              return null;
            }} />
            <Route path="/app-ads" render={() => {
              window.location.href = "/app-ads.txt";
              return null;
            }} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Games} />
            <Route path="/contact" component={Contact} />
            <Route path="/haku" component={Haku3d} />
            <Route render={() => page} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
