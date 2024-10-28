"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Payment = () => {
  const router = useRouter();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleConnectWallet = () => {
    // Placeholder function for wallet connection logic
    setIsWalletConnected(true);
  };

  const handlePaymentSelection = (amount) => {
    setSelectedAmount(amount);
  };

  const handleConfirmPayment = () => {
    if (!isWalletConnected) {
      alert("Please connect your wallet first.");
      return;
    }
    if (!selectedAmount) {
      alert("Please select a payment option.");
      return;
    }
    // Proceed with payment logic
    alert(`Proceeding with payment of $${selectedAmount}`);
    router.push("/dashboard"); // Redirect to dashboard after payment
  };

  return (
    <main className="h-screen flex flex-col justify-between relative p-4">
      {/* Title with Positioning */}
      <h2 className=" sm:text-h3-sm md:text-h3-lg md:text-center md:absolute top-[10rem] md:left-1/2 md:transform md:-translate-x-1/2 text-center mt-20">
        Payment
      </h2>

      {/* Page Content */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6 max-w-md mx-auto mt-40">
        {/* Wallet Connect */}
        <button
          onClick={handleConnectWallet}
          className={`w-full py-3 rounded-md text-white ${
            isWalletConnected ? "bg-purple-800" : "bg-purple-400"
          }`}
        >
          {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
        </button>

        {/* Payment Options */}
        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          <button
            onClick={() => handlePaymentSelection(5)}
            className={`p-4 border text-center ${
              selectedAmount === 5
                ? "border-blue-600 bg-blue-100"
                : "border-gray-300"
            }`}
          >
            <p className="text-lg font-semibold">$5</p>
            <p className="text-sm text-gray-500">20 replies</p>
          </button>
          <button
            onClick={() => handlePaymentSelection(10)}
            className={`p-4 border text-center ${
              selectedAmount === 10
                ? "border-blue-600 bg-blue-100"
                : "border-gray-300"
            }`}
          >
            <p className="text-lg font-semibold">$10</p>
            <p className="text-sm text-gray-500">50 replies</p>
          </button>
          <button
            onClick={() => handlePaymentSelection(50)}
            className={`p-4 border text-center ${
              selectedAmount === 50
                ? "border-blue-600 bg-blue-100"
                : "border-gray-300"
            }`}
          >
            <p className="text-lg font-semibold">$50</p>
            <p className="text-sm text-gray-500">250 replies</p>
          </button>
          <button
            onClick={() => handlePaymentSelection(200)}
            className={`p-4 border text-center ${
              selectedAmount === 200
                ? "border-blue-600 bg-blue-100"
                : "border-gray-300"
            }`}
          >
            <p className="text-lg font-semibold">$200</p>
            <p className="text-sm text-gray-500">1000 replies</p>
          </button>
        </div>
      </div>

      {/* Navigation and Confirmation at Bottom */}
      <div className="w-full flex flex-col items-center mb-4">
        <div className="flex justify-between w-full max-w-md px-4">
          <button
            onClick={() => router.back()}
            className=" text-black py-2 px-6"
          >
            Back
          </button>
          <button
            onClick={handleConfirmPayment}
            className="bg-black text-white py-2 px-6"
          >
            Finish
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-2">5 / 5</div>{" "}
        {/* Final step indicator */}
      </div>
    </main>
  );
};

export default Payment;
