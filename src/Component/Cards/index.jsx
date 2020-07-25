import React,{useState} from 'react';

import Image1 from '../../img/Image1.png';
import Image2 from '../../img/Image2.png';
import Image3 from '../../img/Image3.gif';
import Image4 from '../../img/Image4.gif';
import Image5 from '../../img/Image5.png';
import Image6 from '../../img/Image6.png';
import Image7 from '../../img/Image7.png';
import Image8 from '../../img/Image8.png';
import Image9 from '../../img/Image9.svg';
import Styles from './Cards.module.css';
const Card=[
    {img:Image1,aos:"fade-right"},
    {img:Image2,aos:"zoom-in-up"},
    {img:Image3,aos:"fade-left"},
    {img:Image4,aos:"fade-right"},
    {img:Image5,aos:"zoom-in-up"},
    {img:Image6,aos:"fade-left"},
    {img:Image7,aos:"fade-right"},
    {img:Image8,aos:"zoom-in-up"},
    {img:Image9,aos:"fade-left"},
    ]
export default function Cards() {
    return (
        <section className={Styles.card_section}>
        <h1 data-aos="zoom-in-up" data-aos-duration="1000">Our styles and packs</h1>
        <section className={Styles.Cards}>
            {
                Card.map((card,index)=>(
            <div className={Styles.card} data-aos={card.aos} data-aos-duration="1000" key={index}>
             <img src={card.img} alt="No Image Found" aria-hidden />
             <h1>DrawKit Classic</h1>
             <h3>Illustration library</h3>
             <h5>The original DrawKit illustrations: a large, varied library, free to use on any website, app, or project</h5>
             <h6>110+ illustrations</h6>
           </div>))
            }
        </section>
        </section>
    )
}
