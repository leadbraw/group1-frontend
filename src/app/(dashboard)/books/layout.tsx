import { BookProvider } from 'contexts/BookContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BookProvider>{children}</BookProvider>;
}
