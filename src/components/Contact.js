import React from 'react';
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/");
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <img 
          src="Images/contact-us.jpg" 
          alt="Contact Us " 
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <h1 style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px 20px',
          borderRadius: '10px'
        }}>
          
        </h1>
      </div>
      
      <p>
        If you have any questions or need further information about our book management application, please feel free to contact us.
      </p>
      <h2>Our Offices</h2>
      <p>
        We have offices in multiple locations to serve you better.
      </p>
      
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h3>Head Office</h3>
        <p>
          <strong>Email:</strong> support@bookmanager.com<br />
          <strong>Phone:</strong> +1 123-456-7890<br />
          <strong>Address:</strong> 123 Book Street, Literature City, BK 45678
        </p>

        <h3>Branch Office</h3>
        <p>
          <strong>Email:</strong> branch@bookmanager.com<br />
          <strong>Phone:</strong> +1 987-654-3210<br />
          <strong>Address:</strong> 456 Novel Road, Fiction Town, BK 12345
        </p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <img 
          src="Images/contact-office.png" 
          alt="Office" 
          style={{ width: '50%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>
      
      <button 
        onClick={handleButtonClick} 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: 'darkblue', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Contact;
