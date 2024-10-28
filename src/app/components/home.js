"use client"; // Mark the component as a Client Component

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const Home = () => {
  const router = useRouter();

  // Handle click to navigate to the sign-in page
  const handleNavigation = () => {
    router.push("/onboarding/sign-in");
  };

  return (
    <main className="pt-16 p-4 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-h3-sm lg:text-h3-lg">
        we reply <br /> so you can touch grass
      </h1>
      <button
        onClick={handleNavigation}
        className="bg-black w-48 text-white h-10 mt-8"
      >
        ok
      </button>
      <img
        src="/replyguy.png"
        alt="reply guy dude"
        className="fixed bottom-0 h-[30%] lg:h-100"
      />
    </main>
  );
};

export default Home;
