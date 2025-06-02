import { FormattedMessage } from 'react-intl';

import ReadOutlined from '@ant-design/icons/ReadOutlined';
import BookIcon from '@mui/icons-material/Book';
import BooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';

import { NavItemType } from 'types/menu';

const icons = { ReadOutlined, BookIcon, BooksIcon, SearchIcon };

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
          id: 'author-search',
          title: <FormattedMessage id="author-search" />,
          type: 'item',
          url: '/books/authorsearch',
          icon: icons.SearchIcon
        },
        {
          id: 'isbn-search',
          title: <FormattedMessage id="isbn-search" />,
          type: 'item',
          url: '/books/isbnsearch',
          icon: icons.SearchIcon
        },
        {
          id: 'rating-search',
          title: <FormattedMessage id="rating-search" />,
          type: 'item',
          url: '/books/ratingsearch',
          icon: icons.SearchIcon
        },
        {
          id: 'title-search',
          title: <FormattedMessage id="title-search" />,
          type: 'item',
          url: '/books/titlesearch',
          icon: icons.SearchIcon
        },
        {
          id: 'year-search',
          title: <FormattedMessage id="year-search" />,
          type: 'item',
          url: '/books/yearsearch',
          icon: icons.SearchIcon
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
