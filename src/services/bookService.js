import axios from 'axios';

export const bookService = {
  getAllBooks,
  addBook,
  deleteBook
};

const baseURL = 'http://localhost:3002/bookapi';

// Fetch all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${baseURL}/books`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error; // Re-throwing the error to handle it in the calling function
  }
}

// Add a new book
async function addBook(bookData) {
  try {
    const response = await axios.post(`${baseURL}/books`, bookData);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error; // Re-throwing the error to handle it in the calling function
  }
}

// Delete a book by ISBN
async function deleteBook(isbn) {
  try {
    await axios.delete(`${baseURL}/books/${isbn}`);
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error; // Re-throwing the error to handle it in the calling function
  }
}

export default bookService;
