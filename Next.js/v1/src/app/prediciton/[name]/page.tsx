const getPredictedAge = async (name: string) => {
  const response = await fetch(`https://api.agify.io?name=${name}`);
  return response.json();
};
const getPredictedGender = async (name: string) => {
  const response = await fetch(`https://api.genderize.io?name=${name}`);
  return response.json();
};
const getPredictedCountry = async (name: string) => {
  const response = await fetch(`https://api.nationalize.io?name=${name}`);
  return response.json();
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
  return (
    <div>
      <h1>predicion</h1>
      {params.name}
    </div>
  );
}
