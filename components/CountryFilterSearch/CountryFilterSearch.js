import React, { useState } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import CardGrid from "@/components/CardGrid/CardGrid";

function CountryFilterSearch({ countries }) {
  const [searchValue, setSearchValue] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        onSearch={setSearchValue}
        filterByRegion={filterByRegion}
        onFilterChange={setFilterByRegion}
      />
      <CardGrid searchValue={searchValue} items={countries} />
    </div>
  );
}
export default CountryFilterSearch;
