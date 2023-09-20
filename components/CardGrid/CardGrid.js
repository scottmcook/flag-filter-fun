// Utilities
"use client";
import React, { useReducer, useState } from "react";

function CardGrid({ items }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-9">
        {items.map((country) => {
          return (
            <div key={country.name} className="">
              <div className="mt-3 ml-3 mb-3">
                <div>{country.name}</div>
                <div>{country.region}</div>
                <div className="text-sm text-gray-600">{country.capital}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardGrid;
