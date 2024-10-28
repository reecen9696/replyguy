"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateTwitter = () => {
  const router = useRouter();
  const [isLinked, setIsLinked] = useState(false); // Track Twitter link status

  const handleLinkTwitter = () => {
    // Simulate linking Twitter (this would be replaced with actual linking logic)
    setIsLinked(true);
  };

  return (
    <main className="h-screen flex flex-col justify-between relative">
      {/* Title with Absolute Positioning */}
      <h2 className=" sm:text-h3-sm md:text-h3-lg md:text-center md:absolute lg:top-[10rem] md:left-1/2 md:transform md:-translate-x-1/2 text-center mt-20">
        Link your Twitter account
      </h2>

      {/* Page Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="p-8 max-w-md w-full text-center">
          <button
            onClick={handleLinkTwitter}
            className="w-full bg-black text-white py-2 mb-4"
          >
            Link Twitter
          </button>
          <p className="text-gray-500">{isLinked ? "Linked" : "Not Linked"}</p>
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
            onClick={() => router.push("/onboarding/ai-personality")}
            className=" text-black py-2 px-6"
          >
            Next
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-2">2 / 5</div>{" "}
        {/* Adjust page number dynamically as needed */}
      </div>
    </main>
  );
};

export default CreateTwitter;
