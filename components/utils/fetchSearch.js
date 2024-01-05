
async function fetchSearch({ queryKey }) {

  const res = await fetch(
    `https://raw.githubusercontent.com/scottmcook/flag-filter-fun/main/data/countries.json`
  );

  if (!res.ok) {
    throw new Error(`country search not okie dokie ${name}`);
  }
  return res.json();
}

export default fetchSearch;
