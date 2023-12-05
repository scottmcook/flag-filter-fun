import React, { useMemo, useState } from "react";
import CountryCard from "@/components/CountryCard/CountryCard";

function CardGrid({ countries }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-20">
      {!countries.length ? (
        <h1>No countries found</h1>
      ) : (
        countries.map((pet) => {
          return (
            <CountryCard
              animal={pet.animal}
              id={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={pet.city}
              key={pet.id}
            />
          );
        })
      )}
      </div>
    </>
  );
}

export default CardGrid;
