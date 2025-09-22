import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { __AUTH } from "../backend/firebaseconfig";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Spinner from "../helper/Spinner";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(__AUTH, email);
      toast.success("Password reset email sent successfully!");
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <section className="text-white w-[100vw] min-h-[90vh] flex justify-center items-center">
      <article className="w-[30%] bg-gray-700 p-5 rounded-xl">
        <header className="text-center text-3xl font-bold py-3">
          <h1>Reset Password</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-1 p-3">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="outline-none border border-gray-500 p-2 rounded-lg"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col mb-1 p-3">
            <button
              type="submit"
              className="bg-blue-600 py-2 text-lg rounded-lg cursor-pointer font-semibold hover:bg-blue-700"
            >
              Reset Password
            </button>
          </div>
          <div className="flex justify-center items-center">
            <NavLink
              to={"/auth/login"}
              className={"hover:text-blue-500 hover:underline"}
            >
              Cancel
            </NavLink>
          </div>
        </form>
      </article>
      {isLoading && (<section className='w-[100%] h-[100vh] bg-black/50 fixed top-0'> 
        <Spinner/>
      </section>)}
    </section>
  );
};

export default ResetPassword;