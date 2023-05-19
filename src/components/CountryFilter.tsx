"use client";
import { ChangeEvent, useState } from "react";

type CountryFilterProps = {
  getFilteredRegion: (value: string) => void;
};
export default function CountryFilter({
  getFilteredRegion,
}: CountryFilterProps) {
  const [region, setRegion] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setRegion(value);
    getFilteredRegion(value);
  };

  return (
    <>
      <form>
        <label>
          <select id="region" name="region" onChange={handleChange}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </label>
      </form>
    </>
  );
}
