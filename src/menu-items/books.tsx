import { FormattedMessage } from 'react-intl';

import ReadOutlined from '@ant-design/icons/ReadOutlined';
import BookIcon from '@mui/icons-material/Book';
import BooksIcon from '@mui/icons-material/LibraryBooks';

import { NavItemType } from 'types/menu';

const icons = { ReadOutlined, BookIcon, BooksIcon };

const pages: NavItemType = {
  id: 'group-books',
  title: <FormattedMessage id="books" />,
  type: 'group',
  children: [
    {
      id: 'books',
      title: <FormattedMessage id="books" />,
      type: 'collapse',
      icon: icons.ReadOutlined,
      children: [
        {
          id: 'view-book',
          title: <FormattedMessage id="view-book" />,
          type: 'item',
          url: '/books/view',
          icon: icons.BookIcon
        },
        {
          id: 'list-books',
          title: <FormattedMessage id="view-books" />,
          type: 'item',
          url: '/books/list',
          icon: icons.BooksIcon
        },
        {
          id: 'new-book',
          title: <FormattedMessage id="new-book" />,
          type: 'item',
          url: '/books/new',
          icon: icons.BooksIcon
        }
      ]
    }
  ]
};

export default pages;
