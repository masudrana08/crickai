import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./home.css";
import HightlightImg from "../../assets/highlightImg.png";
import LiveStreamSS from "../../assets/livestream.png";
import { Col, Container, Row } from "react-bootstrap";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
export default function Home() {
  return (
    <div>
      {/* Header  */}
      <div className="headerCont">
        <MyNavbar />
        <div className="mainContentArea">
          <h1>
            Every Cricket Match Live Stream in <br />{" "}
            <span className="yellow-color">4K</span> Ultra HD mo
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            nam.
          </p>
          <div>
            <button>SIGN UP</button>
            <button className="outline">WATCH VIDEO</button>
          </div>
        </div>
      </div>

      {/* Highlight  */}
      <div className="highlightsCont">
        <h3 className="darkblue-color">
          Rewatch your favorite game highlights <br /> on any device
        </h3>
        <div className="blue-color">
          <a href="">Instant Share</a>
          <a href="">Replay</a>
          <a href="">4K Ultra HD</a>
          <a href="">Watch Anywhere</a>
        </div>
        <div>
          <img style={{ maxWidth: "90%" }} src={HightlightImg} alt="" />
        </div>
      </div>

      {/* Live  */}
      <div className="liveCont">
        <Row>
          <Col md={5}>
            <img src={LiveStreamSS} alt="" />
          </Col>
          <Col md={5}>
            <h4>Superior quality live stream.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              sagittis libero fringilla augue quis rhoncus consectetur. Congue
              eu etiam augue et amet, adipiscing nunc, sed nibh. Porttitor
              sapien mi lorem.
            </p>
            <div className="sectionA__bottom">
              <div>
                <h4>4K</h4>
                <p>Ultra HD</p>
              </div>
              <div>
                <h4>Fast</h4>
                <p>Zero Delay</p>
              </div>
              <div>
                <h4>Realtime</h4>
                <p>Updates</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <h4>Easy to use streaming platform.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              sagittis libero fringilla augue quis rhoncus consectetur.
            </p>
            <ul>
              <li>Compatible with any screen size</li>
              <li>Start watching games real quick.</li>
              <li>Receive notifications directly to your phone</li>
            </ul>
          </Col>
          <Col md={5}>
            <img src={LiveStreamSS} alt="" />
          </Col>
        </Row>
      </div>

      {/* Carousel  */}
      <div className='carouselCont'>
        <MyCarousel />
      </div>

      {/* Signup  */}
      <div className="signupCont"></div>

      {/* Footer  */}
      <div className="footerCont"></div>
    </div>
  );
}
