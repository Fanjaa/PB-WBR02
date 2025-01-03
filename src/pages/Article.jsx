// eslint-disable-next-line no-unused-vars
import React from 'react'
import Articles from '../components/Articles/Articles'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar/Navbar'

const Article = () => {
  return (
    <> 
      <ScrollToTop />
      <Navbar />
      <Articles />
      <About />
      <Footer /> 
    </>
  )
}

export default Article
