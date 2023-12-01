import React, { useState } from "react";

import CountryFilterSearch from "@/components/CountryFilterSearch/CountryFilterSearch";

// Data fetching
import useSWR from "swr";
import NavBar from "@/components/NavBar/NavBar";
import Page from "./page";
const fetcher = false;

export default function Index() {
  // const { data, error, isLoading } = useSWR("/api/staticdata", fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (isLoading) return <div>Loading...</div>;
  // if (error)
  //   return (
  //     <div>
  //       <h1>404</h1>
  //       <p>Loading failed...</p>
  //     </div>
  //   );
  // if (!data)
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );

  // return (
  //   <>
  //     <NavBar />
  //     <CountryFilterSearch countries={data} />
  //   </>
  // );
  return (
    <Page />
  )
}
