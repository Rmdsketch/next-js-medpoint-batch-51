'use client';

import HttpClient from '@/lib/axios';
import { Book } from '@/types/Book';
import { storage } from '@/utils/storage';
import React, { createContext, useContext, useState } from 'react';

interface BookState {
  items: Book[];
  isLoading: boolean;
  fetchBook: () => void;
  fetchBookSupabase: () => void;
  saveBook: () => void;
  clearBook: (withStorage?: boolean) => void;
  getBook: () => Book[];
}

const BookContext = createContext<BookState>({
  items: [],
  isLoading: false,
  fetchBook: () => { },
  fetchBookSupabase: () => { },
  saveBook: () => { },
  clearBook: () => { },
  getBook: () => [],
});

export const useBook = () => useContext(BookContext);

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [book, setBook] = useState({
    items: [],
    isLoading: false,
  });

  const fetchBook = async () => {
    setBook({ items: [], isLoading: true });
    try {
      const httpClient = new HttpClient({
        baseURL: 'https://stephen-king-api.onrender.com/',
      });
      const response = await httpClient.get('api/books');
      console.log(response);
      setBook({ items: response.data, isLoading: false });
    } catch (error) {
      console.error(error);
      setBook({ items: [], isLoading: false });
    }
  };

  const fetchBookSupabase = async () => {
    setBook({ items: [], isLoading: true });
    // supabase call
  };

  const STORAGE_BOOK_KEY = 'books';

  const saveBook = () => {
    storage.setItem(STORAGE_BOOK_KEY, book.items);
  };

  const clearBook = (withStorage?: boolean) => {
    setBook({ items: [], isLoading: false });

    if (withStorage) {
      storage.removeItem(STORAGE_BOOK_KEY);
    }
  };

  const getBook = () => {
    const booksData = storage.getItem(STORAGE_BOOK_KEY);
    if (booksData === null) {
      return [];
    }

    setBook({ items: booksData, isLoading: false });
    return booksData;
  };

  return (
    <BookContext.Provider
      value={{ items: book.items, isLoading: book.isLoading, fetchBook, fetchBookSupabase, saveBook, clearBook, getBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
