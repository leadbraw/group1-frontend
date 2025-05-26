'use client';
import { IBook } from "types/books";
import books from "core/mock/mock-data";
import BookDetails from "components/BookItem";
import notfound from "app/not-found";

type prop = {
    params: {isbn13: number};
}
export default function BookView({ params }: prop) {
    const { isbn13 } = params;
    const book: IBook | undefined = books.find(
    (b) => b.isbn13 === isbn13
  );
  if (book) {
    return <BookDetails book={book as IBook} />;
  }
  notfound();
}
