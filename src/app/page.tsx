"use client";

import { Suspense, useState, useEffect } from "react";
import { fetchCountries } from "@/utils/FetchCountry";
import { Countries } from "@/models/Country.model";
import Link from "next/link";
import LoadingPage from "./loading";
import CountryPage from "@/components/CountryPage";
import CountrySearch from "@/components/CountrySearch";

export default function HomePage() {
  const [countriesData, setCountriesData] = useState<Countries[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const getAllCountries = async () => {
      const countries = await fetchCountries();
      setCountriesData(countries);
      setIsLoading(false);
    };
    getAllCountries();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const searchedCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="block lg:grid grid-cols-4">
      <CountrySearch getSearchResult={(value) => setSearchText(value)} />
      {!searchedCountries.length && (
        <p>No country by the name {`"${searchText}"`}</p>
      )}
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
    </section>
  );
}
