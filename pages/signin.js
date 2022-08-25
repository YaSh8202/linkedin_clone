import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import Input from "../components/Input/Input";
import LinkedinLogo from "../components/LinkedinLogo";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

function Sigin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signin, tryLocalSignin } = useContext(AuthContext);
  const router = useRouter();
  const siginHandler = (e) => {
    e.preventDefault();
    signin({ email, password }, () => {
      router.push("/dashboard");
    });
  };

  useEffect(() => {
    tryLocalSignin(() => {
      router.push("/dashboard");
    });
  }, [router, tryLocalSignin]);

  return (
    <div className="w-[90%] mx-auto h-screen bg-white flex flex-col ">
      <LinkedinLogo />
      <div className="flex flex-col items-start md:rounded-md md:shadow-lg w-full max-w-[27rem] mx-auto  h-[24rem] md:h-[34rem] md:px-6 ">
        <div className="mb-6">
          <h3 className="text-[28px] font-semibold ">Sign in</h3>
          <p className="mt-0 text-xs font-medium">
            Stay updated on your professional world
          </p>
        </div>
        <form onSubmit={siginHandler} className="w-full flex flex-col gap-5 ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type={"text"}
            placeholder="Email or Phone"
            className="outline-none border-black border px-2 py-3 placeholder:text-lg text-lg placeholder:text-gray-600 w-full rounded-md "
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={"password"}
            placeholder="Password"
            className="outline-none border-black border px-2 py-3 placeholder:text-lg text-lg placeholder:text-gray-600 w-full rounded-md "
          />
          {state.errorMessage ? (
            <p className=" text-red-700">{state.errorMessage}</p>
          ) : null}
          <div className="text-[#0b68c3] text-sm font-semibold ">
            Forgot Password?
          </div>

          <button
            type="submit"
            className="w-full rounded-full h-12 text-white font-semibold bg-LinkedinBlue"
          >
            Sign in
          </button>
        </form>
      </div>
      <div className="text-center mt-10 ">
        <span>New to Linkedin? </span>
        <Link href="/register">
          <span className="text-[#0b68c3] cursor-pointer text-sm font-semibold ">
            Join now
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Sigin;
