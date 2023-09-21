import React, { useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

function CardGrid({ items, searchValue }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-9">
        {items.map((country) => {
          return <CountryCard key={country.alpha3code} data={country} />;
        })}
      </div>
    </>
  );
}

export default CardGrid;
