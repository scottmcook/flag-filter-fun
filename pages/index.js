import useSWR from "swr";
import Image from "next/image";

import SearchBar from "@/components/SearchBar/SearchBar";
import { useState } from "react";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ countries }) {
  const [searchValue, setSearchValue] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  const { data, error, isLoading } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        filterByRegion={filterByRegion}
        onSearch={setSearchValue}
        onFilterChange={setFilterByRegion}
      />
      <div className="grid grid-cols-4 gap-9">
        {data.map((country) => {
          return (
            <div key={country.name} className="">
              <div className="mt-3 ml-3 mb-3">
                <div>{country.name}</div>
                <div className="text-sm text-gray-600">{country.capital}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
