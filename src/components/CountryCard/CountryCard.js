import React from "react";

function CountryCard({ name, flag, capital, population, region }) {

  return (
    <>
      <div className="flex flex-col pt-3 border border-[#dbdce1] rounded-lg hover:scale-110 transition duration-200 cursor-pointer object-cover">
        <img
          className="w-full h-auto self-center"
          alt={`${name} flag`}
          height={0}
          width={0}
          src={flag}
        />
        <div className="mt-3 ml-3 mb-3">
          <div><span className="font-semibold">Name:</span> {name}</div>
          <div><span className="font-semibold">Capital:</span> {capital}</div>
          <div><span className="font-semibold">Population:</span> {population.toLocaleString('en-US')}</div>
          <div><span className="font-semibold">Region:</span> {region}</div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
