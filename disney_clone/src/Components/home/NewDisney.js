import React from 'react'
import styles from './Newd.module.css'
import {Link} from "react-router-dom"
import Disney from "./../Assets/viewers-disney.png"

function DisneyCom() {

  return (
    <div className={styles.container}>
 <h4>New to Disney+</h4>
 <div className={styles.content}>
  <div className={styles.wrap}>
    <Link to='/'>
        <img src={Disney}  alt="" />
    </Link>

  </div>
  <div className={styles.wrap}>
    <Link to='/'>
        <img src={Disney}  alt="" />
    </Link>

  </div>
  <div className={styles.wrap}>
    <Link to='/'>
        <img src={Disney}  alt="" />
    </Link>

  </div>
  <div className={styles.wrap}>
    <Link to='/'>
        <img src={Disney}  alt="" />
    </Link>

  </div>

 </div>
    </div>
  )
}

export default DisneyCom;
