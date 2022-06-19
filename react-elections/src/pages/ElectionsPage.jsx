import { useEffect, useState } from "react";
import DataCity from "../components/DataCity";
import Header from "../components/Header";
import Main from "../components/Main";
import SelectInput from "../components/SelectInput";
import { apiGetAllCities } from "../services/apiService";

export default function ElectionsPage() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    async function getCountriesAndCandidates() {
      const countries = await apiGetAllCities();
      setCountries(countries.sort((a, b) => a.name.localeCompare(b.name)));
    }
    getCountriesAndCandidates();
  }, []);

  async function onSelectedCountry(country) {
    setSelectedCountry(country);
  }

  return (
    <>
      <Header>react-elections</Header>
      <Main>
        <div className="flex justify-center">
          <SelectInput
            data={countries}
            labelDescription="Escolha o município:"
            onInputChange={onSelectedCountry}
            inputValue={selectedCountry?.id}
          />
        </div>
        <hr />
        {selectedCountry && <DataCity city={selectedCountry} />}
      </Main>
    </>
  );
}
