import React from "react";
import GitHubIcon from "../assets/github.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-gray-800 py-4 flex justify-between items-center px-4">
      <div className="text-left">
        <p>
          &copy; 2024 FutbolRules. All rights reserved.{" "}
          <a
            href="https://chat.openai.com/"
            className="hover:underline text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by GenAI
          </a>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/gillty1995"
          className="text-gray-800 hover:underline flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
