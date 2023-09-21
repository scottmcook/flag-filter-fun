import React from "react";

function SearchBar({
  searchValue,
  filterByRegion,
  onInputChange,
  onFilterChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Search by country name"
      />
      <label for="region-filter">Filter by Region</label>
      <select
        name="regions"
        id="region-filter"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value={"Africa"}>Africa</option>
        <option value={"America"}>America</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
      <p>Filtering by {filterByRegion}</p>
    </form>
  );
}

export default SearchBar;
