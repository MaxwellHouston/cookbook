import { NextPage } from 'next';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/lib/firebase/config';


const Login: NextPage = () => {

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="mt-32 rounded-lg p-10 shadow-xl">
          <h2 className="py-4 text-2xl font-medium">
            Login with Google to leave comments and save recipes!
          </h2>
          <button
            onClick={GoogleLogin}
            className="w-75 flex gap-5 rounded-lg bg-black p-4 align-middle font-medium text-white"
          >
            {/* <FcGoogle className="text-2xl" /> */}
            Login with Google
          </button>
        </div>
      )
};

export default Login;
