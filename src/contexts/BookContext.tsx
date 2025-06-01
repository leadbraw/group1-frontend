'use client';

import React, { createContext, useContext, ReactNode, useState } from 'react';
import { IBook } from 'types/books';

type BookContextProps = {
  selectedBook: IBook | null;
  onChangeBook: (book: IBook) => void;
};

const BookContext = createContext<BookContextProps | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const onChangeBook = (book: IBook) => {
    setSelectedBook(book);
  };

  return <BookContext.Provider value={{ selectedBook, onChangeBook }}>{children}</BookContext.Provider>;
};

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBook must be used within a BookProvider');
  }
  return context;
};
