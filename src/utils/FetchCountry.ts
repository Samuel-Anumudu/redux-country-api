export async function fetchCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    next: {
      revalidate: 60,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const countries = await res.json();
  return countries;
}

export async function fetchCountry(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}
    `,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const country = await res.json();
  return country;
}
