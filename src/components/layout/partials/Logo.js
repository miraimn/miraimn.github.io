import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";
import logo from "../../../assets/images/mirai.png";
// import text from "../../../assets/images/sigma.png";
import "../../../css/logo.scss";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div>
      <h1>
        {/* <Link className="logo" to="/" >
          <Image className="logoWord" src={text} alt="Text" width={176} />
          <Image
            src={logo}
            alt="Open"
            className="logo8"
            width={64}
            height={64}
          />
        </Link> */}
        <a className="logo" href="index.html">
          {/* <Image className="logoWord" src={text} alt="Text" width={176} /> */}
          <Image
            src={logo}
            alt="Open"
            className="logo8"
            width={64}
            height={64}
          />
        </a>
      </h1>
    </div>
  );
};

export default Logo;
