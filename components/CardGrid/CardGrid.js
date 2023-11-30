import React, { useMemo, useState } from "react";
import CountryCard from "@/components/CountryCard/CountryCard";

function CardGrid({ items, searchValue, filterByRegion }) {
  const searchMatch = (value) => value.country == searchValue;
  const filterMatch = (value) => {
    return value.region == filterByRegion;
  };

  const searchItem = items.filter(searchMatch);
  const filteredCountries = items.filter(filterMatch).map((country) => {
    return <CountryCard key={country.name} country={country} />;
  });

  const loadAllCountries = items.map((country) => {
    return <CountryCard key={country.name} country={country} />;
  });

  return (
    <>
      <div className="grid grid-cols-4 gap-20">
        {filteredCountries.length > 1 ? filteredCountries : loadAllCountries}
      </div>
    </>
  );
}

export default CardGrid;
