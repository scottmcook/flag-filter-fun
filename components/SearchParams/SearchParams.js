import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../utils/fetchSearch";
import CardGrid from "../CardGrid/CardGrid";

// Firebase calls
import db from "@/firebaseConfig";
import { getDatabase, ref, child, get } from 'firebase/database';

const REGIONS = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const SearchParams = () => {

  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState("");

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
    console.log(filteredCountries)
  };

  
  return (
    <div>
    <form
        className="flex justify-between pb-10"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            name: formData.get("name") ?? "",
            region: formData.get("region") ?? "",
            // capital: formData.get("capital") ?? "",
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
      
      {selectedRegion ? (
           <CardGrid countries={filteredCountries} />
        ) : (   
            <CardGrid countries={countries} />
          )
        }
     
    </div>
  );
}

export default SearchParams;
