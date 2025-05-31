import { IBook } from 'types/books';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

export function BookItem({ book }: { book: IBook }) {
  return (
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={book.title} src={book.icons.large === "" ? book.icons.small : book.icons.large} variant="rounded" />
        </ListItemAvatar>
        <ListItemText primary={book.title} secondary={`ISBN-13 Number: ${book.isbn13}`} secondaryTypographyProps={{ color: 'gray' }} />
      </ListItem>
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
