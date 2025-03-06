import React from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, closeModal, children }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "70%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
      {children}
    </Modal>
  );
};

export default CustomModal;
