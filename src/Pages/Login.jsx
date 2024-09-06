import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "../Components/GoogleLogin";
import Hero from "../Components/Hero";
import AppleLogin from "../Components/AppleLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/products"; // Default redirect path to products page

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;

        // Redirect to the intended page or products page
        navigate(from, { replace: true }); 
      })
      .catch((error) => {
        setError("Incorrect email or password. Please try again.");
      });
  };

  return (
    <div className="flex">
      {/* Left Section: Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md flex flex-col gap-4 p-8 bg-gray-50 shadow-md rounded-lg">
          <div className="">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500 font-medium">
              Enter your credentials to access your account
            </p>
          </div>
          {/* Email Input */}
          <form onSubmit={handleLogIn} className="flex flex-col gap-4">
            <div className="flex flex-col bg-white rounded px-2 py-1">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="text-gray-600 placeholder-black font-500 border-none outline-none"
              />
            </div>
            {/* Password Input */}
            <div className="flex items-center bg-white rounded px-2 py-1">
              <div className="flex flex-col bg-white rounded flex-grow">
                <label htmlFor="password" className="text-gray-500 text-sm">
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="placeholder-black text-gray-600 border-none outline-none"
                />
              </div>
              <div className="ml-2">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer"
                >
                  {passwordVisible ? (
                    <FaEyeSlash className="text-gray-500 text-xl" />
                  ) : (
                    <FaEye className="text-gray-500 text-xl" />
                  )}
                </button>
              </div>
            </div>

            {error && <div className="text-red-500 mb-2">{error}</div>}
            <a
              href="#"
              className="text-[#1E99F5] hover:text-[#81b9e4] text-sm text-right"
            >
              Forgot password
            </a>

            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>
                I agree to the{" "}
                <a href="#">
                  <u>Terms & Policy</u>
                </a>
              </p>
            </div>

            <button
              className="bg-black py-3 text-lg text-white font-semibold rounded-lg"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center justify-center ">
            <hr className="w-full border-gray-300" />
            <span className="mx-3 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <div className="flex gap-4">
            <GoogleLogin />
            <AppleLogin />
          </div>
          {/* Signup Link and Google Login */}
          <p className="text-center my-4">
            Don’t have an account?{" "}
            <Link className="text-[#0F3DDE] font-semibold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      {/* Right Section: Hero Image/Content */}
      <div className="flex-1">
        <Hero />
      </div>
    </div>
  );
};

export default Login;
