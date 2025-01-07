import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; 

const Modal = ({ isOpen, message, onClose }) => {
  const modalRef = useRef(null); 
  useEffect(() => {
    if (!isOpen) return; 
    
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose(); 
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay"> 
      <div ref={modalRef} className="modal-content">
        <img src="https://img.icons8.com/ios-filled/100/sad-male.png" alt="sad-male" loading='lazy' />
        <h1 className="modal-title">{message || 'Fitur ini akan segera hadir'}</h1>
        <p className="modal-paragraph">Tunggu update selanjutnya, Kami sedang mempersiapkan sesuatu yang baru untuk Anda!</p>
        <div className="modal-footer">
          <button onClick={onClose} className="modal-close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
