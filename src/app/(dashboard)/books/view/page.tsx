import { BookItem } from 'components/BookItem';

export default function BookItemViewPge() {
  const book = {
    authors: 'Archie Adams',
    icons: {
      large: 'https://images.gr-assets.com/books/1361039443m/41865.jpg',
      small: 'https://images.gr-assets.com/books/1361039443s/41865.jpg'
    },
    isbn13: 1212121212121,
    original_title: 'Arctic Action OG',
    publication: 2001,
    ratings: {
      average: 3.1,
      count: 10001,
      rating_1: 2000,
      rating_2: 2000,
      rating_3: 2000,
      rating_4: 2000,
      rating_5: 2001
    },
    title: 'Arctic Action'
  };
  return <BookItem book={book} />;
}
