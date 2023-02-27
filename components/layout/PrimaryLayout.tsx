import { UserContext } from '@/lib/context/UserContext';
import { auth } from '@/lib/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from '../navbar/NavBar';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <UserContext.Provider
        value={{ user, loading, error, logout: () => auth.signOut() }}
      >
        <main className=" flex flex-wrap justify-center font-poppins">
          <NavBar />
          <div className="max-w-3xl">{children}</div>
        </main>
      </UserContext.Provider>
    </>
  );
};

export default PrimaryLayout;
