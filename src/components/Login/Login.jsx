import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Login = () => {

  const { signInuser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);
    signInuser(email,password)
    .then(result =>{
    console.log(result.user)
    event.target.reset();
    navigate(location.state || "/")
  })
  .catch(error =>{
    console.log(error)
  })

  }

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })

  }

    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-center mb-2 text-blue-600">
          Login to Your Account
        </h2>

        
          <p className="text-red-500 text-center mb-3"></p>
        

        <form onSubmit={handleLogin}>
          <label className="text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-blue-400 text-gray-800"
            required
          />

          <label className="text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-blue-400 text-gray-800"
            required
          />

            {/* Forgot Password Link */}
                <Link
                    className="text-sm text-teal-600 mb-4 mt-2 inline-block"
                    to="/forgot"
                    state={{}}>Forgot Password?
                </Link>


          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">Or continue with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button onClick={handleGoogleSignIn}
          
          className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 text-black"
        >
          <img
            src="/assets/google.png"
            className="w-5"
            alt="Google"
          />
          Login with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;