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
            <span className="yellow-color">4K</span> Ultra HD
          </h1>
          <p className="gray-color mt-4 mb-4">
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
        <Container>
          {" "}
          <h2 className="darkblue-color mb-5">
            Rewatch your favorite game highlights <br /> on any device
          </h2>
        </Container>
        <div className="flex-reverse">
          <Container>
            <Row className="anchor">
              <Col xs={6} md={3}>
                <a href="">Instant Share</a>
              </Col>
              <Col xs={6} md={3}>
                <a href="">Replay</a>
              </Col>
              <Col xs={6} md={3}>
                <a href="">4K Ultra HD</a>
              </Col>
              <Col xs={6} md={3}>
                <a href="">Watch Anywhere</a>
              </Col>
            </Row>
          </Container>
          <div>
            <img style={{ maxWidth: "100%" }} src={HightlightImg} alt="" />
          </div>
        </div>
      </div>

      {/* Live  */}
      <div className="liveCont">
        <Container>
          <Row>
            <Col md={5}>
              <img src={LiveStreamSS} alt="" />
            </Col>
            <Col md={5}>
              <h4>Superior quality live <br /> stream.</h4>
              <p className='gray-color'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                sagittis libero fringilla augue quis rhoncus consectetur. Congue
                eu etiam augue et amet, adipiscing nunc, sed nibh. Porttitor
                sapien mi lorem.
              </p>
              <div className="sectionA__bottom">
                <div>
                  <h5 className='yellow-color'>4K</h5>
                  <p>Ultra HD</p>
                </div>
                <div>
                  <h5 className='yellow-color'>Fast</h5>
                  <p>Zero Delay</p>
                </div>
                <div>
                  <h5 className='yellow-color'>Realtime</h5>
                  <p>Updates</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col md={5}>
              <h4>Easy to use streaming <br /> platform.</h4>
              <p className='gray-color'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                sagittis libero fringilla augue quis rhoncus consectetur.
              </p>
              <ul className='list'>
                <li>Compatible with any screen size</li>
                <li>Start watching games real quick.</li>
                <li>Receive notifications directly to your phone</li>
              </ul>
            </Col>
            <Col md={5}>
              <img src={LiveStreamSS} alt="" />
            </Col>
          </Row>
        </Container>
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
