import { BookItem } from 'components/BookItem';

export default function BookItemViewPge() {
  const book = {
    book_id: 1,
    isbn13: 1212121212121,
    original_publication_year: 2001,
    original_title: 'Arctic Action OG',
    title: 'Arctic Action',
    image_url: 'https://images.gr-assets.com/books/1361039443m/41865.jpg',
    small_image_url: 'https://images.gr-assets.com/books/1361039443s/41865.jpg'
  };
  return <BookItem book={book} />;
}
