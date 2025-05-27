import BookItem from 'views/books/books-view';
import { getIsbn } from 'components/BookListItem';
// ==============================|| PAGE ||============================== //

export default function BookItemViewPge() {
  const isbn = getIsbn();
  return <BookItem isbn13={isbn}/>;
}