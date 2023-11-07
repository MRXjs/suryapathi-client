"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";

const SearchBar = () => {
  return (
    <form className="flex items-center justify-center mb-5 border-2 border-solid rounded-md sm:mb-0 ">
      <input
        placeholder="නමින් සොයන්න"
        type="text"
        name="name"
        className="py-2 pl-3 text-sm border-0 outline-none text-[30px]  w-full"
      />
      <div className="mr-3">
        <IconContext.Provider value={{ style: { color: "#c7c7c7" }, size: 25 }}>
          <FiSearch />
        </IconContext.Provider>
      </div>
    </form>
  );
};

export default SearchBar;
