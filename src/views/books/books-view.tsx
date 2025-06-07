'use client';
import books from 'core/mock/mock-data';
import { IBook } from 'types/books';
import { BookItem } from 'components/BookItem';
import notfound from 'app/not-found';

export default function BookView({ isbn13 }: { isbn13: number }) {
  const book: IBook | undefined = books.find((b) => b.isbn13 === isbn13);
  if (book) {
    return <BookItem book={book as IBook} />;
  } else {
    notfound();
  }
}
