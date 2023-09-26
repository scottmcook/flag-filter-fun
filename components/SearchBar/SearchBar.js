import React from "react";

function SearchBar({
  searchValue,
  onInputChange,
  filterByRegion,
  onFilterChange,
}) {
  return (
    <form className="flex justify-between pb-10">
      <input
        type="text"
        value={searchValue}
        className="border-2 border-slate-500"
        onChange={(e) => onInputChange(e.target.value)}
      />
      <div>
        <label className="justify-self-end" for="region-filter">
          Filter by Region
        </label>
        <select
          name="regions"
          id="region-filter"
          placeholder="Search for a country..."
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value={"Africa"}>Africa</option>
          <option value={"America"}>America</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Oceania"}>Oceania</option>
        </select>
      </div>
    </form>
  );
}

export default SearchBar;
