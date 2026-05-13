import { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal  = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <BookingContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
