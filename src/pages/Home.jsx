// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Tournament from "../components/Tournament/Tournament";
import Teams from "../components/Teams/Teams";
import Stories from "../components/Stories/Stories";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  
  useEffect(() => {
    Aos.init()
}, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Intro />
      <Tournament />
      <Teams />
      <Stories />
      <About />
      <Footer /> 
    </>
  )
}

export default Home
