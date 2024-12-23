import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent text-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-3xl font-playwrite pl-3">FutbolRules</h1>
      <a
        href="https://www.futbolsc.fr.to/"
        className="bg-blue-600 bg-opacity-50 text-gray-800 mr-5 px-4 py-2 rounded-md hover:bg-blue-700 transition ease-in-out duration-500"
      >
        Scores
      </a>
    </header>
  );
};

export default Header;
