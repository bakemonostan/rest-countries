import { ref } from 'vue';

const getCountry = (id) => {
  const country = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let response = await fetch('https://restcountries.com/v3.1/name/' + id);
      if (!response.ok) {
        throw Error('An Error Occured');
      }
      country.value = await response.json();
      country.value = country.value[0];
      //   console.log(country.value.population);
      //   console.log(country.value.region);
      //   console.log(country.value.subregion);
      //   console.log(country.value.capital[0]);
      console.log(Object.keys(country.value.currencies));
      console.log(Object.keys(country.value.languages));
      //   console.log(country.value.languages);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { country, error, load };
};

export default getCountry;
