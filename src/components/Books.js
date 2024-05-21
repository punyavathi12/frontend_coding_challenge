import React, { useState, useEffect } from 'react';
import bookService from '../services/bookService';
import './Books.css'; // Add some basic styling

const Books = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('Pride and Prejudice');
  const [author, setAuthor] = useState('Jane Austen');
  const [isbn, setIsbn] = useState('9780141439518');
  const [publicationYear, setPublicationYear] = useState('1813');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    title: '',
    author: '',
    isbn: '',
    publicationYear: ''
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const data = await bookService.getAllBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
    setLoading(false);
  };

  const handleAddBook = async () => {
    // Validate input fields
    let formIsValid = true;
    const newErrors = {
      title: '',
      author: '',
      isbn: '',
      publicationYear: ''
    };

    if (!title) {
      formIsValid = false;
      newErrors.title = 'Title is required';
    }
    if (!author) {
      formIsValid = false;
      newErrors.author = 'Author is required';
    }
    if (!isbn) {
      formIsValid = false;
      newErrors.isbn = 'ISBN is required';
    } else if (books.some(book => book.isbn === isbn)) {
      formIsValid = false;
      newErrors.isbn = 'Book with this ISBN already exists';
    }
    if (!publicationYear) {
      formIsValid = false;
      newErrors.publicationYear = 'Publication year is required';
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    try {
      const newBook = {
        title,
        author,
        isbn,
        publicationYear,
      };
      setLoading(true);
      await bookService.addBook(newBook);
      setTitle('');
      setAuthor('');
      setIsbn('');
      setPublicationYear('');
      fetchBooks(); // Refresh the book list
    } catch (error) {
      console.error("Error adding book: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBook = async (isbn) => {
    // Display a confirmation dialog before deleting the book
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    
    if (confirmDelete) {
      try {
        setLoading(true);
        await bookService.deleteBook(isbn);
        fetchBooks(); // Refresh the book list
      } catch (error) {
        console.error("Error deleting book: ", error);
      } finally {
        setLoading(false);
      }
    }
  };
  
  return (
    <div className="books-container">
      <h1>Books</h1>
      {loading && <p>Loading...</p>}
      <div className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && <p className="error">{errors.author}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
          {errors.isbn && <p className="error">{errors.isbn}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="publicationYear">Publication Year:</label>
          <input
            type="text"
            id="publicationYear"
            placeholder="Publication Year"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
          />
          {errors.publicationYear && <p className="error">{errors.publicationYear}</p>}
        </div>
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.isbn} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Publication Year:</strong> {book.publicationYear}</p>
            <button onClick={() => handleDeleteBook(book.isbn)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
