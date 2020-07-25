import React from 'react';
import Drawkit from '../../img/Drawkit.png';
import Styles from './Component.module.css'

export default function index() {
    return (
        <header>
        <nav>
            <div className={Styles.nav_img_section}>
                <img src={Drawkit} alt="Drawkit"/>
            </div>
            <div className={Styles.nav_ul_section}>
                <ul>
                   <li><a href="#">Illustrations</a></li>
                   <li><a href="#">icons</a></li>
                   <li><a href="#">requests</a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}
