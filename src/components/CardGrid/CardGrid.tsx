import CountryCard from "../CountryCard/CountryCard";

type Country = {
  name: string;
  alpha3Code: string
  flag: {
    large: string;
  }; 
  capital: string; 
  population: number;
  region: string;
}

type CardGridProps = {
  countries: Array<Country>;
}

function CardGrid({ countries }: CardGridProps) {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-20 px-8 dark:bg-dark-very-blue">
      {!countries.length ? (
        <h1>No countries found</h1>
      ) : (
        countries.map((country) => {
          return (
            <CountryCard
              id={country.alpha3Code}
              key={country.alpha3Code}
              name={country.name}
              capital={country.capital ?? 'none'}
              population={country.population}
              region={country.region}
              flag={country.flag.large}
            />
          );
        })
      )}
      </div>
    </>
  );
}

export default CardGrid;
