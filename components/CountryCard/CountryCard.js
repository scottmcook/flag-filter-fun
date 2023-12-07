import React from "react";
import Image from "next/image";

function CountryCard({ name, flag, capital, population, region }) {
  // const { name, flag, capital, population, region } = country;
  return (
    <>
      <div className="flex flex-col pt-3 border border-[#dbdce1] rounded-lg hover:scale-110 transition duration-200 cursor-pointer object-cover">
        <Image
          className="w-full h-auto self-center"
          alt={`${name} flag`}
          height={0}
          width={0}
          src={flag}
        />
        <div className="mt-3 ml-3 mb-3">
          <div>{name}</div>
          <div>{capital}</div>
          <div>{population}</div>
          <div>{region}</div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
