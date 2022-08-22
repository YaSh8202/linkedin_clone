import React, { useContext, useRef, useState } from "react";
import Link from "next/link";
import LinkedinLogo from "../components/LinkedinLogo";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { signup, state } = useContext(AuthContext);

  const togglePassword = (e) => {
    e.preventDefault();
    setIsShow((prev) => !prev);
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    signup({ email, password, name }, () => {
      router.push("/dashboard");
    });
  };

  return (
    <div className="w-[90%] max-w-[28rem] md:items-center mx-auto h-screen bg-white flex flex-col">
      <LinkedinLogo />
      <h2 className="text-center my-4 text-2xl font-semibold">
        {"Join LinkedIn now — it's free"}
      </h2>
      <div className="mt-4 w-full">
        <form onSubmit={signupHandler} className="flex flex-col gap-6">
          <div className=" flex flex-col gap-0 group ">
            <label
              className="text-gray-500 group-focus-within:text-gray-700 text-sm "
              htmlFor="email"
            >
              Email or Phone number
            </label>
            <input
              className="border p-2 peer  rounded outline-gray-600 border-gray-400"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-0 ">
            <label
              className="text-gray-500 group-focus-within:text-gray-700 text-sm "
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="border p-2 peer  rounded outline-gray-600 border-gray-400"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative  flex flex-col gap-0 ">
            <label
              className="text-gray-500 group-focus-within:text-gray-700 text-sm "
              htmlFor="pass"
            >
              Password (6 or more characters)
            </label>
            <input
              min="6"
              className="border p-2 peer  rounded outline-gray-600 border-gray-400"
              type={isShow ? "text" : "password"}
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={togglePassword}
              onTouchStart={togglePassword}
              onTouchEnd={togglePassword}
              className="absolute right-2 top-7 text-gray-600 "
            >
              {isShow ? "Hide" : "Show"}
            </button>
            {state.errorMessage ? (
              <p className=" text-red-700">{state.errorMessage}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full rounded-full h-12 text-white font-semibold bg-LinkedinBlue"
          >
            Continue
          </button>
        </form>
      </div>
      <div className="text-center mt-24 ">
        <span>Already on Linkedin? </span>
        <Link href="/signin">
          <span className="text-[#0b68c3] cursor-pointer text-sm font-semibold ">
            Sign in
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Register;
