"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TweetTarget = () => {
  const router = useRouter();

  const [trendingTerms, setTrendingTerms] = useState("");
  const [targetUsers, setTargetUsers] = useState([""]);
  const [error, setError] = useState("");

  // Add up to 10 Twitter accounts
  const handleAddUser = () => {
    if (targetUsers.length < 10) {
      setTargetUsers([...targetUsers, ""]);
    } else {
      setError("You can only add up to 10 target accounts.");
    }
  };

  const handleUserChange = (index, value) => {
    const newTargetUsers = [...targetUsers];
    newTargetUsers[index] = value;
    setTargetUsers(newTargetUsers);
  };

  // Limit trending terms to 10
  const handleTrendingTermsChange = (e) => {
    const terms = e.target.value.split(",").map((term) => term.trim());
    if (terms.length <= 10) {
      setTrendingTerms(e.target.value);
      setError("");
    } else {
      setError("You can only add up to 10 trending terms.");
    }
  };

  const handleNext = () => {
    if (trendingTerms.trim() === "") {
      setError("Please add at least one trending term.");
      return;
    }
    setError("");
    router.push("/onboarding/crypto-payment"); // Navigate to the next step
  };

  return (
    <main className="h-screen flex flex-col justify-between relative p-4">
      {/* Title with Adjusted Position */}
      <h2 className=" sm:text-h3-sm md:text-h3-lg md:text-center md:absolute top-[10rem] md:left-1/2 md:transform md:-translate-x-1/2 text-center mt-20">
        Tweet Target
      </h2>

      {/* Page Content */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
        {/* Trending Terms */}
        <div className="w-full">
          <label className="text-lg font-semibold">Trending Terms</label>
          <p className="text-sm text-gray-500 mb-2">
            What trending terms do you want to target? (e.g., Bonk Bot, Solana,
            Grand Prix, Trump)
          </p>
          <input
            type="text"
            placeholder="Enter up to 10 trending terms, separated by commas"
            value={trendingTerms}
            onChange={handleTrendingTermsChange}
            className="w-full px-4 py-2 border border-gray-300 mb-4"
          />
        </div>

        {/* Target Users */}
        <div className="w-full">
          <label className="text-lg font-semibold">Target Users</label>
          <p className="text-sm text-gray-500 mb-2">
            Link accounts you want to target
          </p>
          <div className="max-h-64 overflow-y-auto space-y-2 mb-4 border border-gray-300 p-2">
            {targetUsers.map((user, index) => (
              <input
                key={index}
                type="url"
                placeholder={`Twitter account link ${index + 1}`}
                value={user}
                onChange={(e) => handleUserChange(index, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 "
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <button
            onClick={handleAddUser}
            disabled={targetUsers.length >= 10}
            className=" text-black-500 underline disabled:opacity-50"
          >
            + Add another target
          </button>
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
            onClick={() => router.push("/onboarding/payment")} // Directs to next step
            className="Text-black py-2 px-6"
          >
            Next
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-2">4 / 5</div>{" "}
        {/* Adjust page number as needed */}
      </div>
    </main>
  );
};

export default TweetTarget;
