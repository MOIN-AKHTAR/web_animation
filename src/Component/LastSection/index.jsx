import React from 'react';
import Styles from './LastSection.module.css';
import lastSection from '../../img/lastSection.png'

export default function index() {
    return (
    <section className={Styles.last_section}>
      <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay={"500"}>Make your webpages and apps more engaging</h1>
      <h4 data-aos="fade-left" data-aos-duration="1000">Fully customise each SVG vector illustration to match your brand and bring your designs to life</h4>
      <img src={lastSection} alt="Image" data-aos="flip-up" data-aos-duration="1000" aria-hidden/>
      <h4>Trending Illustration Categories</h4>
    </section>
    )
}
