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
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet vitae lacus sed sed elit risus ut. Interdum ac porta sapien, fringilla ultrices faucibus et gravida. At ut rhoncus, blandit mauris, sit. Purus lectus metus, mi, aenean pretium ultricies consectetur nibh. Vehicula cursus enim hendrerit tristique. Ipsum et mi nisl non et”',
    },
    {
      img: Profile2,
      name: 'Wade Waren',
      title: 'Medical Assistant',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet vitae lacus sed sed elit risus ut. Interdum ac porta sapien, fringilla ultrices faucibus et gravida. At ut rhoncus, blandit mauris, sit. Purus lectus metus, mi, aenean pretium ultricies consectetur nibh. Vehicula cursus enim hendrerit tristique. Ipsum et mi nisl non et”',
    },
    {
      img: Profile1,
      name: 'Guy Hawkins',
      title: 'President of Sales',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet vitae lacus sed sed elit risus ut. Interdum ac porta sapien, fringilla ultrices faucibus et gravida. At ut rhoncus, blandit mauris, sit. Purus lectus metus, mi, aenean pretium ultricies consectetur nibh. Vehicula cursus enim hendrerit tristique. Ipsum et mi nisl non et”',
    },
    {
      img: Profile2,
      name: 'Wade Waren',
      title: 'Medical Assistant',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet vitae lacus sed sed elit risus ut. Interdum ac porta sapien, fringilla ultrices faucibus et gravida. At ut rhoncus, blandit mauris, sit. Purus lectus metus, mi, aenean pretium ultricies consectetur nibh. Vehicula cursus enim hendrerit tristique. Ipsum et mi nisl non et”',
    },
    {
      img: Profile1,
      name: 'Guy Hawkins',
      title: 'President of Sales',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet vitae lacus sed sed elit risus ut. Interdum ac porta sapien, fringilla ultrices faucibus et gravida. At ut rhoncus, blandit mauris, sit. Purus lectus metus, mi, aenean pretium ultricies consectetur nibh. Vehicula cursus enim hendrerit tristique. Ipsum et mi nisl non et”',
    },
    {
      img: Profile2,
      name: 'Wade Waren',
      title: 'Medical Assistant',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet vitae lacus sed sed elit risus ut. Interdum ac porta sapien, fringilla ultrices faucibus et gravida. At ut rhoncus, blandit mauris, sit. Purus lectus metus, mi, aenean pretium ultricies consectetur nibh. Vehicula cursus enim hendrerit tristique. Ipsum et mi nisl non et”',
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
      <h4 className='darkblue-color text-center mb-5'>What our customers say</h4>
      <IoIosArrowBack className='prevbtn' />
      <button  onClick={prevSlide}></button>
      <Carousel ref={carouselRef} responsive={responsive} autoPlaySpeed={60000}>
       {
         items.map((item, i)=>{
           return (
             <div className='content'>
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
