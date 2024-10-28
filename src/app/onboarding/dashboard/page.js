"use client";

import React, { useState } from "react";

const Dashboard = () => {
  // Example replies data
  const [replies, setReplies] = useState([
    {
      date: "2023-06-07",
      text: "Great point! Totally agree!",
      link: "https://twitter.com/AHOY_Pirates/status/1660789060447907841",
    },
  ]);

  const [aiPersonality, setAiPersonality] = useState({
    space: "Web3",
    accountLinks: ["", "", ""],
    summary: "",
  });

  const handleAiPersonalityChange = (field, value) => {
    setAiPersonality((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-4 space-y-8">
      {/* Replies Section */}
      <section>
        <h1 className="text-2xl font-bold">Replies</h1>
        <p className="text-gray-600">Recent replies from the reply guy</p>
        <div className="bg-gray-100 p-4 mt-4 h-64 overflow-y-auto space-y-4">
          {replies.map((reply, index) => (
            <div key={index} className="p-2 border-b">
              <p className="text-sm text-gray-500">Date: {reply.date}</p>
              <p className="text-gray-700 mb-2">Reply: {reply.text}</p>
              <a href={reply.link} target="_blank" className="text-blue-500">
                View Tweet
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* AI Personality Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Reply Guy Personality</h1>
        <div className="flex space-x-4">
          {/* Left: AI Personality Form */}
          <div className="w-1/2 space-y-2">
            <label className="text-lg font-semibold">Space</label>
            <select
              value={aiPersonality.space}
              onChange={(e) =>
                handleAiPersonalityChange("space", e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300"
            >
              <option value="Web3">Web3</option>
              <option value="Casino">Casino</option>
              <option value="Only Fans">Only Fans</option>
              <option value="Other">Other</option>
            </select>
            <label className="text-lg font-semibold mt-4">
              Accounts to Copy
            </label>
            {[0, 1, 2].map((i) => (
              <input
                key={i}
                type="url"
                placeholder={`Twitter account link ${i + 1}`}
                value={aiPersonality.accountLinks[i]}
                onChange={(e) => {
                  const newLinks = [...aiPersonality.accountLinks];
                  newLinks[i] = e.target.value;
                  handleAiPersonalityChange("accountLinks", newLinks);
                }}
                className="w-full px-4 py-2 border border-gray-300 mt-1"
              />
            ))}
            <label className="text-lg font-semibold mt-4">Summary</label>
            <textarea
              placeholder="Enter your 50-word summary here"
              value={aiPersonality.summary}
              onChange={(e) =>
                handleAiPersonalityChange("summary", e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 mt-1"
              rows="3"
            />
            <div className="flex space-x-4 mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Save
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Test
              </button>
            </div>
          </div>

          {/* Right: Generated Replies */}
          <div className="w-1/2 bg-gray-100 p-4">
            <h3 className="text-lg font-semibold">Generated Replies</h3>
            <p className="text-gray-500 text-sm">
              Example replies will appear here...
            </p>
            {/* Add generated reply previews here */}
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section>
        <h1 className="text-2xl font-bold">Target</h1>
        <div className="space-y-2">
          <label className="text-lg font-semibold">Trending Terms</label>
          <input
            type="text"
            placeholder="Enter trending terms, separated by commas"
            className="w-full px-4 py-2 border border-gray-300"
          />
          <label className="text-lg font-semibold mt-4">Target Users</label>
          {[...Array(10).keys()].map((_, i) => (
            <input
              key={i}
              type="url"
              placeholder={`Twitter account link ${i + 1}`}
              className="w-full px-4 py-2 border border-gray-300 mt-1"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
