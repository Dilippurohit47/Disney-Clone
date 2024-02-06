import React from 'react'
import 'slick-carousel/slick/slick.css'
import styled from 'styled-components';

import 'slick-carousel/slick/slick-theme.css' 

import Slider from 'react-slick'
import styles from './imgslider.module.css'
import Sliderimg1 from '../Assets/slider-badag.jpg'
import Sliderimg2 from '../Assets/slider img 2.jpg'
import Sliderimg3 from '../Assets/slider im 3.jpg'
import Sliderimg4 from '../Assets/slider img 4.jpg'

const imgSilder = () => {

  let settings = {
    dots:true,
    infinite:true,
    speed : 500,
    slidesToShow:1,
    slidesToScroll : 1,
    autoplay: true,
  }
  return (
  
       <Carousel {...settings}>
<div className={styles.wrap}>

<a> <img src={Sliderimg1} alt="bg" ></img></a>
</div>
<div className={styles.wrap}>
<a> <img src={Sliderimg2} alt="bg" ></img></a>
</div>
<div className={styles.wrap}>
<a> <img src={Sliderimg3} alt="bg" ></img></a>
</div>
<div className={styles.wrap}>
<a> <img src={Sliderimg4} alt="bg" ></img></a>
</div>


       </Carousel>
      
  )
}

const Carousel = styled(Slider)`
margin-top: 20px;
  & > button{
    opacity: 0;
    height:100%;
    width: 5vw;
    z-index: 1;

    &:hover{
      opacity:1; 
     transition : opacity  0.3s ease 0s ;
    }
}
ul li button{
  &:before{
    font-size :10px;
    color: rgb(150 ,158, 171);
  }
}

li.slick-active button:before {
  color : white;
}
.slick-list{
  overflow: initial;
}
.slick-prev{
  left: -107px;
}
.slick-next{
  right: -105px;
}

`;

export default imgSilder
