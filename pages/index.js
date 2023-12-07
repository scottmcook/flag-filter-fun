import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from "@/components/SearchParams/SearchParams";

// Data fetching
import useSWR from "swr";
import NavBar from "@/components/NavBar/NavBar";
const fetcher = false;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export default function Index() {

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <SearchParams  />
    </QueryClientProvider>
  );

}
