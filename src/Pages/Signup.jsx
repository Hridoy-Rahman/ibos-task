import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Hero from "../Components/Hero";
import GoogleLogin from "../Components/GoogleLogin";
import AppleLogin from "../Components/AppleLogin";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;


    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setError("Email already exists");
      return;
    }

    // Register user
    registerUser(email, password, firstName, lastName)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userObject = { email, firstName, lastName };
        users.push(userObject);
        localStorage.setItem("users", JSON.stringify(users));

        if (location.state && location.state.from) {
          navigate(from, { replace: true });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to create an account. Please try again.");
      });
  };

  return (
    <div className="flex">
      {/* Left Section: Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md flex flex-col gap-4 p-8 bg-gray-50 shadow-md rounded-lg">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-1">Welcome To</h1>
            <h1 className="text-4xl font-bold mb-1">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </h1>
            <p className="text-gray-500 font-medium">
              Signup to purchase your desired products
            </p>
          </div>

          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col bg-white rounded px-2 py-1 flex-1">
                <label htmlFor="firstName" className="text-gray-500 text-sm">
                  First Name (Optional)
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="text-gray-600 placeholder-black border-none outline-none w-full"
                />
              </div>
              <div className="flex flex-col bg-white rounded px-2 py-1 flex-1">
                <label htmlFor="lastName" className="text-gray-500 text-sm">
                  Last Name (Optional)
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="text-gray-600 placeholder-black border-none outline-none w-full"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col bg-white rounded px-2 py-1">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="text-gray-600 placeholder-black border-none outline-none w-full"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center bg-white rounded px-2 py-1">
              <div className="flex flex-col flex-grow">
                <label htmlFor="password" className="text-gray-500 text-sm">
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="placeholder-black text-gray-600 border-none outline-none w-full"
                />
              </div>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-2 text-gray-500 text-xl"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && <div className="text-red-500 mb-2">{error}</div>}

            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms & Policy
                </a>
              </label>
            </div>

            <button
              className="bg-black py-3 text-lg text-white font-semibold rounded-lg w-full"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center justify-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="mx-3 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <div className="flex gap-4">
            <GoogleLogin />
            <AppleLogin />
          </div>

          <p className="text-center my-4">
            Have an account?{" "}
            <Link className="text-[#0F3DDE] font-semibold" to="/login">
              Sign In
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

export default SignUp;
