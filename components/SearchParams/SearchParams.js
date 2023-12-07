import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../utils/fetchSearch";
import CardGrid from "../CardGrid/CardGrid";

const REGIONS = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const SearchParams = () => {
  const [requestParam, setRequestParam] = useState({
    name: "",
    capital: "",
  });
  const results = useQuery({ requestParam: "search", queryKey: [fetchSearch]});
  const countries = results?.data?.name ?? [];
  
  return (
    <div>

    <form
        className="flex justify-between pb-10"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
      <label htmlFor="country">
        Country Search 
      <input
        id="country"
        name="country"
        placeholder="Country"
        />
      </label>
      <div>
        <label className="justify-self-end" htmlFor="region-filter">
          Filter by Region
        </label>
        <select
          name="regions"
          id="region-filter"
          placeholder="Search for a country..."
          onChange={(e) => onFilterChange(e.target.value)}
          >
          {REGIONS.map(region => {
            return (
              <option key={region} value={region}>{region}</option>
              )
            })}
        </select>
      </div>
    </form>
      <CardGrid countries={countries} />
    </div>
  );
}

export default SearchParams;
