// Utilities
"use client";
import React, { useReducer, useState } from "react";

// Data fetching
import useSWR from "swr";

// UI Components

import Card from "@/Card/Card";
import Image from "next/image";

function CardLayout() {
  const [isTable, setLayout] = useState(false);

  const handleGridToggle = () => {
    setLayout(false);
  };

  const handleTableToggle = () => {
    setLayout(true);
  };

  const { data, error } = useSWR(handler, fetcher);
  if (error)
    return (
      <div>
        <h1>404</h1>
        <p>Loading failed...</p>
      </div>
    );
  if (!data)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <>
      <div className="flex justify-between border border-y-[#ededf0] px-7">
        <input
          className="w-80 my-2 py-2 pl-3 rounded-md background-color--light"
          placeholder="Search"
        />

        <div className="flex items-center gap-x-5">
          <div>
            <Image
              alt="list view icon"
              className={`${
                isTable ? "background-color--light" : ""
              } cursor-pointer`}
              width={20}
              height={20}
              src={handleListLogo}
              onClick={handleTableToggle}
            />
          </div>
          <div>
            <Image
              alt="grid view icon"
              className={`${
                !isTable ? "background-color--light" : ""
              } cursor-pointer`}
              width={20}
              height={20}
              src={handleGridLogo}
              onClick={handleGridToggle}
            />
          </div>

          <div>Filter</div>
        </div>
      </div>

      {!isTable ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-6 mx-14">
            <Card data={data} />
          </div>
        </>
      ) : (
        <div className="grid mt-6 mx-28 text-neutral-600">
          <Card data={data} />
        </div>
      )}
    </>
  );
}

export default CardLayout;
