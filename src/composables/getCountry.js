import { ref } from 'vue';

const getCountry = (id) => {
  const country = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let response = await fetch(
        `https://restcountries.com/v2/name/${id}?fullText=true`
      );
      if (!response.ok) {
        throw Error('An Error Occured');
      }
      country.value = await response.json();
      country.value = country.value[0];
      //   console.log(country.value);
      console.log(country.value.languages);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { country, error, load };
};

export default getCountry;
