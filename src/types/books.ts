import IIcons from './icons';
import { IRatings } from './ratings';

export interface IBook {
  book_id: number;
  authors: string;
  icons: IIcons;
  isbn13: number;
  original_title: string;
  publication: number;
  ratings: IRatings;
  title: string;
}
