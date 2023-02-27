import { User } from 'firebase/auth';
import { createContext } from 'react';

type IUserContext = {
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
  logout?: () => void;
};

export const UserContext = createContext<IUserContext>({
  user: null,
  loading: false,
  error: undefined,
});
