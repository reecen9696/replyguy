"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AuthForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission for sign-in or registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
      });
    } else {
      // For a sign-up or registration action
      router.push("/onboarding/create-twitter"); // Navigate to the next onboarding step
    }
  };

  return (
    <main className="h-screen flex flex-col justify-between relative">
      {/* Title with Absolute Positioning */}
      <h2 className=" sm:text-h3-sm md:text-h3-lg md:text-center md:absolute top-[10rem] md:left-1/2 md:transform md:-translate-x-1/2 text-center mt-20">
        {isLogin ? "Log in" : "Create an Account"}
      </h2>

      {/* Page Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="p-8  max-w-md w-full">
          <div className="text-center lg:text-body-lg mt-4 flex pb-2">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 cursor-pointer px-2"
            >
              {isLogin ? "Sign up" : "Log in"}
            </span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 "
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 lg:button-lg"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          {!isLogin && (
            <button
              onClick={() =>
                signIn("google", { callbackUrl: "/onboarding/create-twitter" })
              }
              className="w-full bg-black text-white py-2  mt-4"
            >
              Sign up with Google
            </button>
          )}
        </div>
      </div>

      {/* Navigation and Page Number at Bottom */}
      <div className="w-full flex flex-col items-center mb-4">
        <div className="flex justify-between w-full max-w-md px-4">
          <button
            onClick={() => router.back()}
            className=" text-black py-2 px-6 disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={() => router.push("/onboarding/connect-twitter")} // Directs to next step
            className=" text-black py-2 px-6"
          >
            Next
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-2">1 / 5</div>{" "}
        {/* Adjust page number as needed */}
      </div>
    </main>
  );
};

export default AuthForm;
