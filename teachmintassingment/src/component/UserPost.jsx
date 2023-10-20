import React, { useRef, useEffect, useState } from 'react';

const UserPost = ({ title, body }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isPopupOpen]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    marginBottom: '16px',
    cursor:"pointer",
    height:"80%"
  };

  return (
    <div>
    <div onClick={openPopup} style={cardStyle}>
    <h2>{title}</h2>
      <p>{body}</p>
    </div>
    {isPopupOpen && (
      <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '1000',
      }}
    >
      <div
        ref={cardRef}
        style={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px', // Set a maximum width for the card
        }}
      >
        <h2 style={{textAlign:"center"}}>{title}</h2>
        <p>{body}</p>
        <button onClick={closePopup} style={{ background: '#007BFF', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Close
        </button>
      </div>
    </div>
    )}
  </div>
    
  );
};

export default UserPost;
