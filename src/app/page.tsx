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
  const [countriesData, setCountriesData] = useState<Countries[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  useEffect(() => {
    const getAllCountries = async () => {
      const countries = await fetchCountries();
      setCountriesData(countries);
      setIsLoading(false);
    };
    getAllCountries();
  }, []);

  // Functions

  const filteredRegion = countriesData.filter((country) => {
    return region
      ? country.region.toLowerCase() === region.toLowerCase()
      : countriesData;
  });

  const searchedCountries = filteredRegion.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <section>
      <CountrySearch getSearchResult={(value) => setSearchText(value)} />
      <CountryFilter getFilteredRegion={(value) => setRegion(value)} />
      <div className="block lg:grid grid-cols-4">
        {!searchedCountries.length && <p>No country found</p>}
        {searchedCountries.map((country: Countries, index: string | number) => (
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
