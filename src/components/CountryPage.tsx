import { Countries } from "@/models/Country.model";
type CountryProps = {
  country: Countries;
};

export default function CountryPage({ country }: CountryProps) {
  return <div> {country.name.common}</div>;
}
