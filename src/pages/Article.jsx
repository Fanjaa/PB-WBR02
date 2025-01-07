// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Articles from '../components/Articles/Articles'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/Navbar/Navbar'
import Modal from '../components/Modal/Modal'

const Article = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <> 
      <ScrollToTop />
      <Navbar openModal={openModal} />
      <Articles openModal={openModal} />
      <About openModal={openModal} />
      <Footer openModal={openModal} /> 
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </>
  )
}

export default Article
