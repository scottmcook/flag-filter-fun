import React, { useMemo, useState } from "react";
import CountryCard from "@/components/CountryCard/CountryCard";

function CardGrid({ countries }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-20">
      {!countries.length ? (
        <h1>No countries found</h1>
      ) : (
        countries.map((country) => {
          return (
            <CountryCard
              key={country.name}
              animal={country.animal}
              id={country.id}
              capital={country.capital}
              population={country.population}
              region={country.region}
              flag={country.flag}
            />
          );
        })
      )}
      </div>
    </>
  );
}

export default CardGrid;
