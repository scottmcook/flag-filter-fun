import { useState } from "react";
import CardGrid from "../CardGrid/CardGrid";
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

  const { data: countries = [], isError, isLoading } = useQuery(
    "countries",
    async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/scottmcook/flag-filter-fun/main/data/items.json"
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

  if (isLoading) return 'Loading...'

  if (isError) return 'An error has occurred: ' + isError

  return (
    <div>
      <div className="flex flex-wrap justify-between mx-8 mb-10">
        <label htmlFor="country" className="sr-only">
          Country Search 
        </label>
        <input
          id="country"
          name="country"
          placeholder="Search for a country"
          className="w-full lg:w-1/3 pl-5 py-3 shadow-sm rounded-md dark:bg-dark-blue-elements dark:font-white "
          onChange={(e) => setSearchQuery(e.target.value)}
          />

      
          <label className="sr-only" htmlFor="region-filter">
            Filter by Region
          </label>
          <select
            name="regions"
            id="region-filter"
            className="w-full lg:w-48 lg:mt-0 pl-2 py-3 mt-6 shadow-sm rounded-md dark:bg-dark-blue-elements"
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
