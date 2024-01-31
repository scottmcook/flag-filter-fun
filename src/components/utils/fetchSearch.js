async function fetchSearch({ queryKey }) {
  const {name} = queryKey[1];

  if (!name) return []
  
  const res = await fetch(
    `https://countriesdb-a00c2-default-rtdb.firebaseio.com/name=${name}`
  );

  if (!res.ok) {
    throw new Error(`country search not okie dokie ${name}`);
  }

  return res.json();
}

export default fetchSearch;
