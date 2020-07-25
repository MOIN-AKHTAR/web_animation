import React from 'react';
import Styles from './Landing.module.css';
import Google from '../../img/Google.png';
import Amazon from '../../img/Amazon.png';
import Invision from '../../img/Invision.png';
import Typeform from '../../img/Typeform.png';
import Toptal from '../../img/Toptal.png';
import Landing from '../../img/Landing1.gif';



export default function index() {
    return (
      <React.Fragment>
      <section className={Styles.landing}>
        <div data-aos="fade-right" data-aos-duration="1000">
            <h1>Beautiful, free illustrations. Updated weekly.</h1>
        <h3>
            <strong>Now 100% free!</strong> Hand-drawn vector illustration and icon resources, perfect for your next project.</h3>
            <div></div>
            <h3>Sign up for free weekly illustrations:</h3>
            <input type="email" placeholder="Enter your email address" />
            <button>JOIN</button>
        </div>
        <div className={Styles.divider}></div>
        <div data-aos="fade-left" data-aos-duration="1000">
            <img src={Landing} alt="No Image" aria-hidden/>
        </div>
    </section>
    <h4 style={{textAlign: "center",color:"rgba(0, 0, 0, 0.6)"}}>Trusted by these fine companies and many more
    </h4>
    <section className={Styles.img_section}>
    <img src={Google} alt="Google" data-aos="flip-left" data-aos-duration="1000" aria-hidden />
    <img src={Amazon} alt="Amazon" data-aos="flip-left" data-aos-duration="1000" aria-hidden />
    <img src={Invision} alt="Invision" data-aos="flip-up" data-aos-duration="1000"  aria-hidden/>
    <img src={Typeform} alt="Typeform" data-aos="flip-right" data-aos-duration="1000"  aria-hidden/>
    <img src={Toptal} alt="Topal" data-aos="flip-right" data-aos-duration="1000" aria-hidden />
    </section> 
      </React.Fragment>
    )
}
