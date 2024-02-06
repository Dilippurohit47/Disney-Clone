import React from 'react'
 import styles from './viewer.module.css'
 import Disney from './../Assets/viewers-disney.png'
 import Marvel from './../Assets/viewers-marvel.png'
 import Pixar from './../Assets/viewers-pixar.png'
 import Starwar from './../Assets/viewers-starwars.png'
 import National from './../Assets//viewers-national.png'
import DisneyVideo from './../Assets/videos/1564674844-disney.mp4'
import MarvelVideo from './../Assets/videos/marvel.mp4'
import PixarVideo from './../Assets/videos/pixar.mp4'
import NationalVideo from './../Assets/videos/national-geographic.mp4'
import StarVideo from './../Assets/videos/star-wars.mp4'

const viewer = (props) => {
  return  <div  className={styles.container}>

 <div className={styles.wrap}>
    <img src={Disney} ></img>
    <video autoPlay loop muted playsInline>
      <source src={DisneyVideo} type='video/mp4'/>
    </video>
</div>
 <div className={styles.wrap}>
    <img src={Marvel} ></img>
    <video autoPlay loop muted playsInline>
      <source src={MarvelVideo} type='video/mp4'/>
    </video>
</div>
 <div className={styles.wrap}>
    <img src={Pixar} ></img>
    <video autoPlay loop muted playsInline>
      <source src={PixarVideo} type='video/mp4'/>
    </video>
</div>
 <div className={styles.wrap}>
    <img src={National} ></img>
    <video autoPlay loop muted playsInline>
      <source src={NationalVideo} type='video/mp4'/>
    </video>
</div>
 <div className={styles.wrap}>
    <img src={Starwar} ></img>
    <video autoPlay loop muted playsInline>
      <source src={StarVideo} type='video/mp4'/>
    </video>
</div>




  </div>;

  
}

export default viewer;
