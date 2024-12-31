// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Articles from '../components/Articles/Articles'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'
import NavbarArticles from '../components/Articles/NavbarArticles'

const Article = () => {
  return (
    <> 
      <ScrollToTop />
      <NavbarArticles />
      <Articles />
      <About />
      <Footer /> 
    </>
  )
}

export default Article
