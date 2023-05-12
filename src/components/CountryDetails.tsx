import { Countries } from "@/models/Country.model";

type CountryProps = {
  country: Countries[];
};
export default function CountryDetails({ country }: CountryProps) {
  return <div>{country[0].name.common}</div>;
}
