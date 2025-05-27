import { IBook } from 'types/books';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import Link from 'next/link';
let isbn = 0;
export function BookListItem({ book }: { book: IBook }) {
  isbn = book.isbn13;
  return (
    <Link href={`/books/view/${book.isbn13}`} passHref legacyBehavior>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={book.title} src={book.small_image_url} variant="rounded" />
      </ListItemAvatar>
      <ListItemText primary={book.title} secondary={'ISBN-13 Number: ' + book.isbn13} secondaryTypographyProps={{ color: 'gray' }} />
    </ListItem>
    </Link>
  );
}

export function NoBook() {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <CommentsDisabledIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="No Elements" />
    </ListItem>
  );
}
export function getIsbn() {
  if (isbn == 0) {
    return 1212121212121;
  } else {
    return isbn;
  }
}
