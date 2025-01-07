import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openModal = (message) => {
    if (!isModalOpen) { 
      setModalMessage(message);
      setIsModalOpen(true); 
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return {
    isModalOpen,
    modalMessage,
    openModal,
    closeModal,
  };
};

export default useModal;
