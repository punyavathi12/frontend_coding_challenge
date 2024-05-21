import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h3>Welcome to Bookify</h3>
        <img src="/Images/bookBanner.png" width="100%" height="250" alt="Banner" />
      </header>
      <main>
        <section>
          <h1>Welcome to Our Book Management Application</h1>
          <p>
            This application is designed to help you manage your book collection easily and efficiently. 
            Whether you are an avid reader, a librarian, or simply someone who loves to organize their books, 
            our platform is tailored to meet your needs.
          </p>
          <p>
            Navigate through our site using the links above to explore more about us, view and manage books, 
            contact us for more information, or login to access protected features.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Book Management Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
