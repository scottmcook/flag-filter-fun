import React, { useState } from "react";

import CountryFilterSearch from "@/components/CountryFilterSearch/CountryFilterSearch";

// Data fetching
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ countries }) {
  const { data, error, isLoading } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
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

  return <CountryFilterSearch countries={data} />;
}
