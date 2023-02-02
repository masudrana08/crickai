import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import Profile1 from '../../assets/profile1.png'
import Profile2 from '../../assets/profile2.png'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import "react-multi-carousel/lib/styles.css";
import './mycarousel.css'

export default function MyCarousel() {
  const carouselRef = useRef()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const items = [
    {
      img: Profile1,
      name: 'Guy Hawkins',
      title: 'President of Sales',
      description: '"I have been using CrickAI for a few months now and I am thoroughly impressed with its performance. It accurately predicts the outcomes of cricket matches and has helped me make informed betting decisions. The user interface is also user-friendly and easy to navigate."',
    },
    {
      img: Profile2,
      name: 'Wade Waren',
      title: 'Medical Assistant',
      description: '"CrickAI has revolutionized the way I follow cricket. The insights and analysis it provides is unparalleled and has helped me understand the game better. The live match predictions are especially helpful during high-stakes matches."',
    },
    {
      img: Profile1,
      name: 'Guy Hawkins',
      title: 'President of Sales',
      description: '"I was skeptical about using a cricket prediction model at first but CrickAI has proven me wrong. Its accuracy is remarkable and I have been consistently making profitable bets thanks to it. I highly recommend it to any cricket fan or bettor."',
    },
    {
      img: Profile2,
      name: 'Wade Waren',
      title: 'Medical Assistant',
      description: '"CrickAI has exceeded my expectations. Not only does it provide match predictions, but it also offers in-depth player analysis and team comparisons. This level of detail helps me make informed decisions and understand the game on a deeper level."',
    },
    {
      img: Profile1,
      name: 'Guy Hawkins',
      title: 'President of Sales',
      description: `"I've tried several cricket prediction tools in the past but none have come close to the accuracy and reliability of CrickAI. Its regular updates and advanced algorithms keep me ahead of the game and I couldn't be happier with my investment in this tool."`,
    },
    {
      img: Profile2,
      name: 'Wade Waren',
      title: 'Medical Assistant',
      description: `"As a hardcore cricket fan, I was thrilled to find CrickAI. It's great to have a tool that gives me a statistical edge in my conversations and debates about the game. The match predictions are spot on and the player analysis is a great added bonus."`,
    },
  ]
  
  function nextSlide(){
    const slide = carouselRef.current.state.currentSlide + 1
    carouselRef.current.next()
    carouselRef.current.goToSlide(slide)
  }
  function prevSlide(){
    const slide = carouselRef.current.state.currentSlide -1
    carouselRef.current.previous()
    carouselRef.current.goToSlide(slide)
  }
  return (
    <div className='mycarouselCont'>
      
      <IoIosArrowBack className='prevbtn' onClick={prevSlide} />
      <button  onClick={prevSlide}></button>
      <Carousel ref={carouselRef} responsive={responsive} autoPlaySpeed={60000}>
       {
         items.map((item, i)=>{
           return (
             <div key={i} className='content'>
               <img src={item.img} alt="" />
               <p className='mt-3'>{item.description}</p>
               <div>
                 <h5 className='text-dark'>{item.name}</h5>
                 <p style={{fontStyle:'italic'}}>{item.title}</p>
               </div>
             </div>
           )
         })
       }
       
      </Carousel>
      <IoIosArrowForward className='nextbtn' onClick={nextSlide} />
      
    </div>
  )
}
