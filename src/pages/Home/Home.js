import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./home.css";
import HightlightImg from "../../assets/highlightImg.png";
import LiveStreamSS from "../../assets/livestream.png";
import Logo from "../../assets/logo.png";

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
          <div>
            <a href="">Instant Share</a>
          </div>
          <div>
            <a href="">Replay</a>
          </div>
          <div>
            <a href="">4K Ultra HD</a>
          </div>
          <div>
            <a href="">Watch Anywhere</a>
          </div>
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
      <div className="carouselCont">
        <MyCarousel />
      </div>

      {/* Signup  */}
      <div className="signupCont">
        <h4>Get Started Today</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button>SIGN UP</button>
      </div>

      {/* Footer  */}
      <div className="footerCont">
        <Container>
          <Row>
            <Col md={2}>
              <img src={Logo} alt="" />
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </Col>
            <Col md={2}>
              <h6>Quick Links</h6>
              <div>
                <a href="#">Home</a>
              </div>
              <div>
                <a href="#">About CrickAi</a>
              </div>
              <div>
                <a href="#">Our Services</a>
              </div>
              <div>
                <a href="#">Features</a>
              </div>
              <div>
                <a href="#">Contact Us</a>
              </div>
            </Col>
            <Col md={2}>
              <h6>Legal</h6>
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <a href="#">Terms and Conditions</a>
              </div>
            </Col>
            <Col md={2}>
              <h6>Contact Us</h6>
              <div>
                <a href="#">example@gmail.com</a>
              </div>
              <div>
                <a href="#">(239) 555-0108</a>
              </div>
            </Col>
            <Col md={4}>
              <h6>Newsletter</h6>
              <p>Never miss an update. Subscribe to our newsletter.</p>
              <div className="subscribeCont">
                <input type="text" placeholder="Email" />
                <h6 className="subscribeBtn">Subscribe</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
