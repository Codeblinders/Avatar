import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AvatarList from './components/AvatarList';
import FloatingButton from './components/FloatingButton';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [avatars, setAvatars] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userName = 'John Doe';

  useEffect(() => {
    fetch('https://reqres.in/api/users', {
      method: 'GET',
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log(data); // Optional: Log data for debugging
        setAvatars(data.data.slice(0, 3));
        setIsLoading(false);
      })
      .catch(err => {
        setError(`Failed to fetch avatars: ${err.message}`);
        setIsLoading(false);
      });
  }, []);

  const openModal = () => {
    setIsClosing(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 300); // Matches CSS transition duration
  };

  return (
    <div className="app-container">
      <Header userName={userName} />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <AvatarList avatars={avatars} />
      )}
      <FloatingButton onClick={openModal} />
      {modalOpen && <Modal onClose={closeModal} isClosing={isClosing} />}
    </div>
  );
}

export default App;
