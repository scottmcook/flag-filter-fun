import React, { useMemo, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

function CardGrid({ items, searchValue, filterByRegion }) {
  let loadItems = items.map((country) => {
    return <CountryCard key={country.name} data={country} />;
  });
  const searchMatch = (value) => value.country == searchValue;
  const filterMatch = (value) => value.region == filterByRegion;

  const searchItem = loadItems.filter(searchMatch);
  const filteredItems = loadItems.filter(filterMatch);

  return (
    <>
      <div className="grid grid-cols-4 gap-20">{loadItems}</div>
    </>
  );
}

export default CardGrid;
