"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AiPersonality = () => {
  const router = useRouter();

  const [title, setTitle] = useState("Web3");
  const [accountLinks, setAccountLinks] = useState(["", "", ""]);
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!summary || summary.split(" ").length > 50) {
      setError("Please provide a summary of up to 50 words.");
      return;
    }
    // Clear the error if validation is successful
    setError("");
    // Navigate to the next onboarding step (e.g., /onboarding/crypto-payment)
    router.push("/onboarding/tweet-target");
  };

  const handleSummaryChange = (e) => {
    const wordCount = e.target.value
      .split(" ")
      .filter((word) => word.length > 0).length;
    if (wordCount <= 50) {
      setSummary(e.target.value);
    }
  };

  const handleAccountLinkChange = (index, value) => {
    const newAccountLinks = [...accountLinks];
    newAccountLinks[index] = value;
    setAccountLinks(newAccountLinks);
  };

  return (
    <main className="h-screen flex flex-col justify-between relative p-4">
      {/* Title */}
      <h2 className=" sm:text-h3-sm md:text-h3-lg md:text-center md:absolute lg:top-[10rem] md:left-1/2 md:transform md:-translate-x-1/2 text-center mt-20">
        Reply guy personality
      </h2>
      {/* Page Content */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
        {/* Title - Space */}
        <div className="w-full">
          <label className="text-lg font-semibold">Space</label>
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 mt-1"
          >
            <option value="Web3">Web3</option>
            <option value="Casino">Casino</option>
            <option value="Only Fans">Only Fans</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Accounts to Copy */}
        <div className="w-full">
          <label className="text-lg font-semibold">Accounts to Copy</label>
          <p className="text-sm text-gray-500 mb-2">
            Copy the personality of a Twitter account
          </p>
          {accountLinks.map((link, index) => (
            <input
              key={index}
              type="url"
              placeholder={`Twitter account link ${index + 1}`}
              value={link}
              onChange={(e) => handleAccountLinkChange(index, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300  mt-1 mb-2"
            />
          ))}
        </div>

        {/* Summary */}
        <div className="w-full">
          <label className="text-lg font-semibold">Summary</label>
          <p className="text-sm text-gray-500 mb-2">
            Give us a 50-word summary of who you want to be
          </p>
          <textarea
            value={summary}
            onChange={handleSummaryChange}
            placeholder="Enter your 50-word summary here"
            className="w-full px-4 py-2 border border-gray-300  mt-1"
            rows="3"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
            onClick={() => router.push("/onboarding/tweet-target")} // Directs to next step
            className="text-black py-2 px-6"
          >
            Next
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-2">3 / 5</div>{" "}
        {/* Adjust page number as needed */}
      </div>
    </main>
  );
};

export default AiPersonality;
