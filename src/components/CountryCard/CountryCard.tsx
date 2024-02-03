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
      <div className="flex flex-col pt-3 w-56 overflow-hidden shadow-md dark:bg-dark-blue-elements rounded-lg hover:scale-110 transition duration-200 cursor-pointer object-contain ">
        <img
          className="w-full  scale-125"
          src={flag}
          alt={`${name} flag`}
        />
        <div className="text-sm mt-3 ml-4 pb-10">
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
