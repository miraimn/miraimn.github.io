import React from "react";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div className="site-footer-inner">
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">
              Made by <a href="https://cruip.com">Cruip</a>. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
