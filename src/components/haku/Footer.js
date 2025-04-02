import "../../css/haku-footer.scss";
import fb from "../../assets/images/social/facebook.svg";
import ins from "../../assets/images/social/instagram.svg";
import linked from "../../assets/images/social/linkedin.svg";
import reddit from "../../assets/images/social/reddit.svg";
import tik from "../../assets/images/social/tiktok.svg";
import twt from "../../assets/images/social/twitter.svg";
import yt from "../../assets/images/social/youtube.svg";
import logo from "../../assets/images/mirai.png";
import LoremIpsum from "react-lorem-ipsum";
import { Link } from "react-router-dom";
function FooterSocialMedia() {
  return (
    <div className="footer-social">
      <p>Find us on:</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100091562528797">
            <img src={fb} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <img src={ins} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/sigma-leads/">
            <img src={linked} />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com">
            <img src={reddit} />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com">
            <img src={tik} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <img src={yt} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <img src={twt} />
          </a>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
function Logo() {
  return (
    <div className="footer-logo">
      <img className="footer-logo-img" src={logo}></img>
    </div>
  );
}
function FooterNav() {
  return (
    <div className="footer-social">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="index.html?page=About">About us</a>
        </li>
        <li>
          <a href="index.html?page=Projects">Projects</a>
        </li>
        <li>
          <a href="index.html?page=Contact">Contact</a>
        </li>

        <li></li>
      </ul>
    </div>
  );
}
function FooterInfo() {
  return (
    <div className="footer-info">
      <p className="footer-info-title">Contact : </p>
      <p className="footer-info-text">contact@mirai.mn</p>
      <FooterNav />
    </div>
  );
}

//reveal-from-bottom

export default function Footer() {
  return (
    <div className="footer-mainContainer ">
      <hr></hr>
      <div className="footer-datas">
        <FooterSocialMedia />
        <Logo></Logo>
        <FooterInfo />
      </div>
      <div className="footer-copyright">MiraiArts © 2024</div>
      <br />
    </div>
  );
}
