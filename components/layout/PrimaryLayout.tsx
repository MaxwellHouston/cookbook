import Head from 'next/head';
import NavBar from '../navbar/NavBar';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <main>
        <NavBar sampleProp="Big Ol Nav Bar" />
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
