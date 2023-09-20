//useSWR allows the use of SWR inside function components
import useSWR from "swr";
import Image from "next/image";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR("/api/staticdata", fetcher);
  const parsedData = JSON.parse(data);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

  return (
    <div>
      {parsedData.map((country) => {
        return (
          <div
            key={country.name}
            className="flex flex-col pt-3 border border-[#dbdce1] rounded-lg hover:scale-110 transition duration-200 cursor-pointer object-cover"
          >
            <div className="mt-3 ml-3 mb-3">
              <div>{country.name}</div>
              <div className="text-sm text-gray-600">{country.capital}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
