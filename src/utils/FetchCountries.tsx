export async function fetchCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/independent?status=true"
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const countries = await res.json();
  return countries;
}
