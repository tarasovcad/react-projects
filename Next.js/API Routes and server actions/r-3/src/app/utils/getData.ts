export async function getData() {
  const response = await fetch('https://swapi.dev/api/people/?format=json');
  const data = await response.json();
  //console.log(data.count);
  return data;
}
