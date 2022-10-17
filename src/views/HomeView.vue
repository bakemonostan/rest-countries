<template>
  <main class="bg-[#fafafa] dark:bg-[#202c37]">
    <section class="max-w-screen-2xl mx-auto py-2 px-3">
      <form
        @submit.prevent="handleInput"
        class="flex items-center flex-wrap justify-between"
      >
        <input
          class="w-full py-2 px-8 mt-5 rounded-sm md:w-2/5 shadow-lg bg-white dark:bg-[#2b3945]"
          type="searchInput"
          placeholder="Search for a country..."
          v-model="searchInput"
        />
        <div
          class="w-[250px] py-2 px-6 mt-5 rounded-sm shadow-lg relative dark:bg-[#2b3945]"
        >
          <p>Filter by Region</p>
          <!-- <div
            class="absolute w-full inset-x-0 top-12 p-6 space-y-2 dark:bg-[#2b3945]"
          ></div> -->
        </div>
      </form>

      <p v-if="!countries.length">loading...</p>

      <div class="flex flex-wrap gap-10 justify-center py-10 2xl:justify-between">
        <home-card
          v-for="country in searchCountry"
          :key="country.name"
          :country="country"
        />
      </div>
    </section>
  </main>
</template>

<script>
import { ref, computed } from "vue";
import getCountries from "@/composables/getCountries";
import HomeCard from "@/components/HomeCard.vue";
export default {
  components: { HomeCard },
  name: "HomeView",
  setup() {
    const { countries, error, load } = getCountries();
    load();
    const searchInput = ref("");
    const regions = ref(["Africa", "America", "Asia", "Europe", "Oceania"]);
    // Computed
    const searchCountry = computed(() => {
      return countries.value.filter((country) =>
        country.name.toLowerCase().includes(searchInput.value.toLowerCase())
      );
    });
    const handleInput = (e) => {
      const searchCountry = computed(() => {
        return countries.value.filter((country) =>
          country.region.includes(e.target.innerHTML)
        );
      });
      return searchCountry;
    };

    // const filteredCountries = computed(() => {
    //   return countries.value.filter((country) => {
    //     console.log(country);
    //     return country;
    //   });
    // });
    // console.log(filteredCountries);

    return {
      searchInput,
      handleInput,
      countries,
      error,
      load,
      searchCountry,
      regions,
      // filteredCountries,
    };
  },
};
</script>

<style></style>
