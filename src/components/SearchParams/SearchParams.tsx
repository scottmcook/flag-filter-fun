import { FormEvent, SetStateAction, useState, useEffe } from "react";
import CardGrid from "../CardGrid/CardGrid";
// import fetchSearch from "../utils/fetchSearch";
import { useQuery } from "react-query";


const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchParams = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const { isPending, error, data } = useQuery({
    queryKey: ['countryData'],
    queryFn: () =>
      fetch('https://raw.githubusercontent.com/scottmcook/flag-filter-fun/main/data/countries.json').then((res) =>
        res.json(),
      ),
  })
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const countries = data ?? [];

  useEffect(() => {
    // Function to filter countries based on search input and region
    const filterCountries = () => {
      return countries.filter((country) => {
        const matchesSearch =
          country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.capital.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesRegion = regionFilter === '' || country.region === regionFilter;

        return matchesSearch && matchesRegion;
      });
    };

    setFilteredCountries(filterCountries());
  }, [searchQuery, regionFilter, countries]);

  const handleSearchEvent = (event: FormEvent<HTMLFormElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRegionFilterChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setRegionFilter(event.target.value);
  };

  return (
    <div>
    <form
        className="flex justify-between pb-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchEvent(e);
        }}
      >
      <label htmlFor="country">
        Country Search 
      <input
        id="country"
        name="country"
        placeholder="Country"
        onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      <div>
        <label className="justify-self-end" htmlFor="region-filter">
          Filter by Region
        <select
          name="regions"
          id="region-filter"
          onChange={(e) => {
            handleRegionFilterChange(e);
          }}
          onBlur={(e) => {
            handleRegionFilterChange(e);
          }}
          >
            <option />
          {REGIONS.map(region => {
            return (
              <option key={region} value={region}>{region}</option>
              )
            })}
        </select>
        </label>
      </div>
      <button>Submit</button>
    </form>

      {countries ? (
           <CardGrid countries={countries} />
        ) : (   
            <h1>No countries found</h1>
          )
        }
     
    </div>
  );
}

export default SearchParams;
