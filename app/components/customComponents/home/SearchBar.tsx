import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex items-center bg-white  shadow-md w-full md:w-4/5">
      <input
        type="text"
        placeholder="Search cities"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 p-3 outline-none text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white px-7 md:px-10 py-3 md:py-5 font-medium hover:bg-red-600 transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
