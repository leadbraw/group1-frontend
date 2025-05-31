'use client';

import { useBook } from 'contexts/BookContext';
import { BookItem } from 'components/BookItem';
import { NoBook } from 'components/BookItem';

export default function BookContextPage() {
  const { selectedBook } = useBook();

  if (!selectedBook) {
    return <NoBook />;
  }

  return <BookItem book={selectedBook} />;
}
