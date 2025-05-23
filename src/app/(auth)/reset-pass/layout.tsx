// PROJECT IMPORTS
import AuthGuard from 'utils/route-guard/AuthGuard';

// types
import { GuardProps } from 'types/auth';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }: GuardProps) {
  return <AuthGuard>{children}</AuthGuard>;
}
