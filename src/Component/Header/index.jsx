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
                   <li><a href="/illustrations">Illustrations</a></li>
                   <li><a href="/icons">icons</a></li>
                   <li><a href="/requests">requests</a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}
