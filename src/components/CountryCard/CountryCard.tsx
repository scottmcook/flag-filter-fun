type CountryCardProps = {
  name: string;
  flag: string
  capital: string; 
  population: number;
  region: string;
}
function CountryCard({ name, flag, capital, population, region }: CountryCardProps) {
  return (
    <>
      <div className="flex flex-col bg-white shadow-md dark:bg-dark-blue-elements overflow-hidden rounded-lg hover:scale-110 transition duration-200 cursor-pointer object-cover">
        <div className="h-48 overflow-hidden shadow-sm">
        <img
          className="w-full h-full object-cover "
          src={flag}
          alt={`${name} flag`}
        />
        </div>
        
        <div className="mt-3 ml-4 pb-10">
          <div className="text-lg font-bold pb-4">{name}</div>
          <div><span className="font-semibold">Population:</span> {population.toLocaleString('en-US')}</div>
          <div><span className="font-semibold">Region:</span> {region}</div>
          <div><span className="font-semibold">Capital:</span> {capital}</div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
