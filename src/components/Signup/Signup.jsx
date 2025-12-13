import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';

import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import toast from 'react-hot-toast';



const Signup = () => {

  const { createUser, signInWithGoogle, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (event) =>{
  event.preventDefault();
  const name = event.target.name.value;
  const photourl = event.target.photourl.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(name,photourl,email,password)

    createUser(email, password)
      .then(() => updateUserProfile(name, photourl))
      .then((result) => {
        toast.success("Account created successfully 🎉");
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {

        let message = error.message;

        if (error.code === "auth/email-already-in-use") {
          message = "This email is already registered";
        } else if (error.code === "auth/weak-password") {
          message = "Password must be at least 6 characters";
        } else if (error.code === "auth/invalid-email") {
          message = "Invalid email address";
        }

        toast.error(message);
      });
  };

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
          Create Your Account
        </h2>

        
          <p className="text-red-500 text-center mb-3"></p>
        

        <form onSubmit={handleSignup} >
          <label className="block mb-3">
            <span className="text-gray-700 font-medium">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-blue-400 text-gray-800"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-medium">Photo URL</span>
            <input
              type="text"
              name="photourl"
              placeholder="Upload your photo url"
              required
              className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-blue-400 text-gray-800"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-medium">Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-blue-400 text-gray-800"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-medium">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-blue-400 text-gray-800"
            />
          </label>

          <button className="w-full mt-2 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-400">OR</div>

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
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>

      </div>
    </div>
    );
};

export default Signup;