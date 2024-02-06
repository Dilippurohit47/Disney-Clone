import React from "react";
import styles from "./Login.module.css";
import ctalogo1 from "./Assets/cta-logo-one.svg";
import ctalogo2 from "./Assets/cta-logo-two.png";
const Login = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content}>
          <div className={styles.CTA}>
            <img className={styles.cta1} src={ctalogo1} alt=""></img>
            <a className={styles.signup}>GET UP ALL THERE </a>
            <p className={styles.description}>
              "Welcome to the magical world of Disney! Enter a realm where
              beloved characters come to life, captivating stories unfold, and
              dreams take flight. Experience enchantment at every click with our
              Disney login page."
            </p>
            <img className={styles.cta2} src={ctalogo2}></img>
          </div>
        </div>
        
        <div className={styles.bgimage}></div>
      </div>
    </section>
  );
};

export default Login;
