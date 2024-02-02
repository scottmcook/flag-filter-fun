import CountryCard from "../CountryCard/CountryCard";

type Country = {
  name: string;
  flag: {
    small: string;
    medium: string;
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
      <div className="grid grid-cols-4 gap-20">
      {!countries.length ? (
        <h1>No countries found</h1>
      ) : (
        countries.map((country) => {
          return (
            <CountryCard
              key={country.name}
              name={country.name}
              capital={country.capital ?? 'none'}
              population={country.population}
              region={country.region}
              flag={country.flag.medium}
            />
          );
        })
      )}
      </div>
    </>
  );
}

export default CardGrid;
