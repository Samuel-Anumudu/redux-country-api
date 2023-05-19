"use client";

import { Suspense, useState, useEffect } from "react";
import { fetchCountries } from "@/utils/FetchCountry";
import { Countries } from "@/models/Country.model";
import Link from "next/link";
import LoadingPage from "./loading";
import CountryPage from "@/components/CountryPage";
import CountrySearch from "@/components/CountrySearch";
import CountryFilter from "@/components/CountryFilter";

export default function HomePage() {
  // States
  const [countries, setCountries] = useState<Countries[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    const getAllCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
      setIsLoading(false);
    };
    getAllCountries();
  }, []);

  // Functions
  const newCountries = countries
    .filter((country) => {
      return region
        ? country.region.toLowerCase() === region.toLowerCase()
        : countries;
    })
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchText.toLowerCase())
    );

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <section>
      <CountrySearch getSearchResult={(value) => setSearchText(value)} />
      <CountryFilter getFilteredRegion={(value) => setRegion(value)} />
      <div className="block lg:grid grid-cols-4">
        {!newCountries.length && <p>No country found</p>}
        {newCountries.map((country: Countries, index: number) => (
          <Link
            key={country.name.common ?? index}
            href={`/${country.name.common}`}
          >
            <Suspense fallback={<LoadingPage />}>
              <CountryPage country={country} />
            </Suspense>
          </Link>
        ))}
      </div>
    </section>
  );
}
