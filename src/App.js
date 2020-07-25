import React, { Component } from 'react'
import Header from './Component/Header';
import Landing from './Component/Landing';
import Cards from './Component/Cards';
import LastSection from './Component/LastSection';
import Footer from './Component/Footer';
import AOS from 'aos'
import './App.css';
import 'aos/dist/aos.css';

export default class App extends Component {

  constructor(props, context) { 
    super(props, context); 
    AOS.init({duration:2000}); 
  } 
  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 
  render() {
    return (
       <React.Fragment>
      <Header />
      <Landing/>
      <Cards/>
      <LastSection/>
      <Footer/>
    </React.Fragment>
    )
  }
}

