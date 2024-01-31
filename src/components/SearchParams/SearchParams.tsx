import { useState } from "react";
import CardGrid from "../CardGrid/CardGrid";

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchParams = () => {

  const [countries, setCountries] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  return (
    <div>
    <form
        className="flex justify-between pb-10"
        onSubmit={(e) => {
          e.preventDefault();
          // const formData = new FormData(e.target);
          // const obj = {
          //   name: formData.get("name") ?? "",
          //   region: formData.get("region") ?? "",
          //   // capital: formData.get("capital") ?? "",
          // };
          // console.log(obj);
          handleSearchEvent(e);
        }}
      >
      <label htmlFor="country">
        Country Search 
      <input
        id="country"
        name="country"
        placeholder="Country"
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <div>
        <label className="justify-self-end" htmlFor="region-filter">
          Filter by Region
        <select
          name="regions"
          id="region-filter"
          placeholder="Search for a country..."
          onChange={(e) => {
            handleRegionChange(e);
          }}
          onBlur={(e) => {
            handleRegionChange(e);
          }}
          >
            <option />
          {REGIONS.map(region => {
            return (
              <option key={region} value={region}>{region}</option>
              )
            })}
        </select>
        </label>
      </div>
      <button>Submit</button>
    </form>
=
      {selectedRegion || searchTerm ? (
           <CardGrid countries={filteredCountries} />
        ) : (   
            <CardGrid countries={countries} />
          )
        }
     
    </div>
  );
}

export default SearchParams;
