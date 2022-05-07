import React from 'react'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import './home.css'

export default function Home() {
  return (
    <div>
      {/* Header  */}
      <div className="headerCont">
        <MyNavbar />
      </div>

      {/* Highlight  */}
      <div className="highlightsCont"></div>

      {/* Live  */}
      <div className="liveCont"></div>

      {/* Carousel  */}
      <div className="carouselCont"></div>

      {/* Signup  */}
      <div className="signupCont"></div>

      {/* Footer  */}
      <div className="footerCont"></div>
    </div>
  )
}
