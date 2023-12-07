import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../utils/fetchSearch";
import CardGrid from "../CardGrid/CardGrid";

// Firebase calls

import { getDatabase, ref, child, get } from 'firebase/database';
import { db } from '../../firebaseConfig';

const REGIONS = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const SearchParams = () => {

  const [requestParams, setRequestParams] = useState({
    name: "",
    capital: "",
  });
  
  const [countries, setCountries] = useState([]);
  // const results = useQuery({ requestParams: "search", queryKey: [fetchSearch]});
  // const countries = db ?? [];

  useEffect(() => {
		const dbRef = ref(getDatabase());
		get((dbRef)).then((snapshot) => {
			if (snapshot.exists()) {
        const newData = snapshot.val();

        setCountries(newData);
			} else {
				console.log("No data available");
			}
		}).catch((error) => {
			console.error(error);
		});
	}, [])
  
  return (
    <div>
    <form
        className="flex justify-between pb-10"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            name: formData.get("name") ?? "",
            regions: formData.get("regions") ?? "",
            capital: formData.get("capital") ?? "",
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
      <button>Submit</button>
    </form>
      <CardGrid countries={countries} />
    </div>
  );
}

export default SearchParams;
