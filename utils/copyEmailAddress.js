"use client";

import copyToClipboard from "copy-to-clipboard";
import { BsCopy } from "react-icons/bs";

export default function CopyEmailAddress() {
  const copyEmailToClipboard = () => {
    const success = copyToClipboard("ghpaterson@gmail.com");
    if (success) {
      alert("Thanks for getting in touch!");
    } else {
      console.error("Failed to copy");
    }
  };
  return (
    <div className="flex gap-2">
      <h2 className="">ghpaterson@gmail.com</h2>
      <div className="text-lg cursor-pointer" onClick={copyEmailToClipboard}>
        <BsCopy />
      </div>
    </div>
  );
}
