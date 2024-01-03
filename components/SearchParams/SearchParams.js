import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../utils/fetchSearch";
import CardGrid from "../CardGrid/CardGrid";

// Firebase calls
import db from "@/firebaseConfig";
import { getDatabase, ref, child, get } from 'firebase/database';

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchParams = () => {

  const [countries, setCountries] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");

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

   // Handle region selection
   const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);

    // Filter countries based on the selected region
    const filteredCountries = countries.filter(country => country.region === selectedRegion);
    setFilteredCountries(filteredCountries);
  };

  const handleSearchEvent = (event) => {
    const searchName = event.target.value;
    setSearchTerm(searchName);

    // Filter countries based on the search 
    const searchResults = countries.filter(country => country.name.includes(searchName));
    setFilteredCountries(searchName);
  };

  
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
