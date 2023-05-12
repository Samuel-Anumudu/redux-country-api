import { Suspense } from "react";
import { ParsedUrlQuery } from "querystring";
import { fetchCountry } from "@/utils/FetchCountry";
import CountryDetails from "@/components/CountryDetails";
import LoadingPage from "../loading";
export default async function CountryDetailsPage({
  params,
}: {
  params: ParsedUrlQuery;
}) {
  const country = await fetchCountry(params.countryName as string);
  return (
    <section>
      <Suspense fallback={<LoadingPage />}>
        <CountryDetails country={country} />
      </Suspense>
    </section>
  );
}
