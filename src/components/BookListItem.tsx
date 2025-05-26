import { IBook } from 'types/books';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import Link from 'themes/overrides/Link';

export function BookListItem({ book }: { book: IBook }) {
  return (
    <Link href={'/books/view/${book.book_id}'} passHref legacyBehavior>
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
