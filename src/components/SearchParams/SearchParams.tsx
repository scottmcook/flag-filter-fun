import { useState } from "react";
import CardGrid from "../CardGrid/CardGrid";
// import fetchSearch from "../utils/fetchSearch";
import { useQuery } from "react-query";

type Country = {
  alpha3Code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: {
    large: string;
  };
}


const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchParams = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filterParam, setFilterParam] = useState('All');

  const { data: countries = [], error, isPending } = useQuery(
    "countries",
    async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
      );
      const result = await response.json();
      return Object.values(result) as Country[];
    }
  );

  const filteredData = countries.filter((item) => {
    if (filterParam === "All" || item.region === filterParam) {
      return ["capital", "name", "numericCode"].some((newItem) =>
        item[newItem as keyof Country]
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }
    return false;
  });

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <label htmlFor="country">
        Country Search 
      <input
        id="country"
        name="country"
        placeholder="Country"
        onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      <div>
        <label className="justify-self-end" htmlFor="region-filter">
          Filter by Region
        <select
          name="regions"
          id="region-filter"
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
          >
          {REGIONS.map(region => {
            return (
              <option key={region} value={region}>{region}</option>
              )
            })}
        </select>
        </label>
      </div>



      {countries ? (
           <CardGrid countries={filteredData} />
        ) : (   
            <h1>No countries found</h1>
          )
        }
     
    </div>
  );
}

export default SearchParams;
