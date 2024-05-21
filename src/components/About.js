import React from 'react';


function About() {
  return (
    <div style={{ backgroundColor: 'LightPink', padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <img src='Images/about-us.webp' alt="About Us" style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '20px' }} />
      <h1>About Us</h1>
      <div style={{ textAlign: 'left', margin: '20px 0' }}>
        <p>
          Welcome to our Book Management Application! We are dedicated to providing you with an easy and efficient way to manage your book collection. Whether you are a book enthusiast, a library administrator, or someone who loves to organize their reading materials, our platform is designed to meet your needs.
        </p>
        <p>
          Our mission is to create a seamless and intuitive experience for book management. We believe that keeping track of your books should be simple and enjoyable, allowing you to focus on what you love most – reading.
        </p>
        <p>
          Our application offers a range of features that make it easy to:
        </p>
        <ul style={{ textAlign: 'left', margin: '20px 0' }}>
          <li>Catalog and organize your books by title, author, ISBN, and publication year.</li>
          <li>Add new books to your collection effortlessly.</li>
          <li>View detailed information about each book in a visually appealing format.</li>
          <li>Ensure your book data is always up-to-date with simple editing and updating tools.</li>
        </ul>
        <p>
          We are constantly working to improve our application and add new features based on user feedback. Your satisfaction is our top priority, and we are committed to delivering a product that you will love.
        </p>
        <p>
          Thank you for choosing our Book Management Application. Happy reading!
        </p>
      </div>
    </div>
  );
}

export default About;
