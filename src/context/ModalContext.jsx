import React, { createContext, useContext, useState } from "react";

// Create the context
const ModalContext = createContext();

// Create a custom hook to use the modal context
export const useModal = () => {
  return useContext(ModalContext);
};

// Provider component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
