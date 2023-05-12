"use client";
import { FaSearch } from "react-icons/fa";
import { ChangeEvent, useState } from "react";

type CountrySearchProps = {
  getSearchResult: (value: string) => void;
};

export default function CountrySearch({ getSearchResult }: CountrySearchProps) {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    getSearchResult(value);
  };

  return (
    <>
      <form className="relative">
        <div className="form-group ">
          <label>
            <input
              type="text"
              placeholder="Search for a country..."
              className="block px-6 py-2"
              value={searchText}
              onChange={handleSearch}
            />
            <FaSearch className="absolute top-2/4 left-2 -translate-x-2/4 -translate-y-2/4" />
          </label>
        </div>
      </form>
    </>
  );
}
