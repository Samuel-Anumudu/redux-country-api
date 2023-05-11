import { fetchCountries } from "@/utils/FetchCountries";
import { Countries } from "@/models/Countries.model";
import Link from "next/link";
export default async function HomePage() {
  const countries = await fetchCountries();

  return (
    <main>
      <h1>Home Page</h1>

      <section>
        {countries.map((country: Countries) => (
          <Link key={country.name.common} href={`/${country.name.common}`}>
            {country.name.common}
          </Link>
        ))}
      </section>
    </main>
  );
}
