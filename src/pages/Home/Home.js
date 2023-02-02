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
        <MyNavbar />
      <div className="headerCont">
        <div className="mainContentArea">
          <h1>
            Every Cricket Match Live Stream in <br />{" "}
            <span className="yellow-color">4K</span> Ultra HD
          </h1>
          <p className="gray-color mt-4 mb-4">
            Vibrant sound & picture quality for an authentic experience.
          </p>
          <div>
            <button>SIGN UP</button>
            <button className="outline">WATCH VIDEO</button>
          </div>
        </div>
      </div>

      {/* Highlight  */}
      <div id="highlight" className="highlightsCont">
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
                <a href="https://www.youtube.com/@crickai" target="_blank">Instant Share</a>
              </Col>
              <Col xs={6} md={3}>
                <a href="https://www.youtube.com/@crickai" target="_blank">Replay</a>
              </Col>
              <Col xs={6} md={3}>
                <a href="https://www.youtube.com/@crickai" target="_blank">4K Ultra HD</a>
              </Col>
              <Col xs={6} md={3}>
                <a href="https://www.youtube.com/@crickai" target="_blank">Watch Anywhere</a>
              </Col>
            </Row>
          </Container>
          <div>
            <img style={{ maxWidth: "100%" }} src={HightlightImg} alt="" />
          </div>
        </div>
      </div>

      {/* Live  */}
      <div id="live" className="liveCont">
        <Container>
          <Row>
            <Col md={5}>
            <h2 className='hideInDesktop mb-4'>Superior quality live <br /> stream.</h2>
              <img src={LiveStreamSS} alt="" />
            </Col>
            <Col md={5}>
              <h2 className='hideInAndroid'>Superior quality live <br /> stream.</h2>
              <p className='gray-color'>
                Experience the best in live cricket with CrickAI's superior quality live stream. Enjoy stunning visuals and crystal-clear audio for an immersive viewing experience like never before.
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
          <Row className=" mt-5 flex-reverse">
            <Col md={5}>
              <h2 className='hideInAndroid'>Easy to use streaming <br /> platform.</h2>
              <p className='gray-color'>
              Stream cricket matches with ease on CrickAI's user-friendly platform. Enjoy a seamless experience with intuitive navigation and hassle-free streaming.
              </p>
              <ul className='list'>
                <li>Compatible with any screen size</li>
                <li>Start watching games real quick.</li>
                <li>Receive notifications directly to your phone</li>
              </ul>
            </Col>
            <Col md={5}>
            <h2 className='hideInDesktop mb-4 mt-5'>Easy to use streaming <br /> platform.</h2>
              <img src={LiveStreamSS} alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Carousel  */}
      <div id="review" className="carouselCont">
      <h2 className='darkblue-color text-center mt-5'>What our customers say</h2>
        <MyCarousel />
      </div>

      {/* Signup  */}
      <div className="signupCont">
        <h2>Get Started Today</h2>
        <p>Experience live cricket with vivid 4K detail and clarity. </p>
        <button>SIGN UP</button>
      </div>

      {/* Footer  */}
      <div className="footerCont">
        <Container>
          <Row>
            <Col lg={3} style={{padding:'0 40px'}}>
              <img style={{width:'159px', height:'81px'}} className='mb-4' src={Logo} alt="" />
              <p className='gray-color'>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </Col>
            <Col lg={2}>
              <h6 >Quick Links</h6>
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
            <Col lg={2}>
              <h6>Legal</h6>
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <a href="#">Terms and Conditions</a>
              </div>
            </Col>
            <Col lg={2}>
              <h6>Contact Us</h6>
              <div>
                <a href="#">example@gmail.com</a>
              </div>
              <div>
                <a href="#">(239) 555-0108</a>
              </div>
            </Col>
            <Col md={6} lg={3} className='newsletter'>
              <h6>Newsletter</h6>
              <p>Never miss an update. Subscribe to our newsletter.</p>
              <div className="subscribeCont">
                <input type="text" placeholder="Email" />
                <h6 className="subscribeBtn">SUBSCRIBE</h6>
              </div>
            </Col>
          </Row>
          <p className='gray-color mt-5 text-center'>Copyright © 2022 Crick Ai. All Rights Reserved.</p>
        </Container>
      </div>
    </div>
  );
}
