// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
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
import Modal from '../components/Modal/Modal';

const Home = () => {
  
  useEffect(() => {
    Aos.init({
      once: true,
    });
}, [])

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
      <Navbar openModal={openModal}/>
      <Hero />
      <Main />
      <Intro />
      <Tournament />
      <Teams />
      <Stories />
      <About openModal={openModal} />
      <Footer openModal={openModal}/> 
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </>
  )
}

export default Home
