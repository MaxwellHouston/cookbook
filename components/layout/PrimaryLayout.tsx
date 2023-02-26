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
      <main className=" flex flex-wrap justify-center font-poppins">
        <NavBar />
        <div className="max-w-3xl">{children}</div>
      </main>
    </>
  );
};

export default PrimaryLayout;
