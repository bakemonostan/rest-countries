<template>
  <main class="bg-[#fafafa] dark:bg-[#202c37]">
    <section class="max-w-screen-2xl mx-auto py-2 px-3">
      <form @submit.prevent="handleInput">
        <input
          class="w-full py-2 px-8 mt-5 rounded-sm md:w-2/5 shadow-lg bg-white dark:bg-[#2b3945]"
          type="searchInput"
          placeholder="Search for a country..."
          v-model="searchInput"
        />
        <h1 class="searchInput-xl font-bold mt-6">{{ searchInput }}</h1>
      </form>
      <p v-if="!countries.length">loading...</p>
      <div class="flex flex-wrap gap-10 justify-center py-10 2xl:justify-between">
        <home-card v-for="country in countries" :key="country.area" :country="country" />
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import getCountries from "@/composables/getCountries";
import HomeCard from "@/components/HomeCard.vue";

export default {
  components: { HomeCard },
  name: "HomeView",

  setup() {
    const { countries, error, load } = getCountries();
    const searchInput = ref("");
    load();

    const handleInput = () => {
      console.log(searchInput.value);
      searchInput.value = "";
    };

    return { searchInput, handleInput, countries, error, load };
  },
};
</script>

<style></style>
