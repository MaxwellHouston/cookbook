import { NextPage } from 'next';
import { UserContext } from '@/lib/context/UserContext';
import { useContext } from 'react';

const Home: NextPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Hillary&apos;s Cookbook</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {!user && <button className="btn btn-primary">Log In</button>}
          {!user && <div className="divider mx-auto w-1/2">or</div>}
          <button className="btn btn-primary">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
