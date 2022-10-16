<template>
  <div
    class="flex-none basis-[320px] shadow-lg rounded-lg cursor-pointer hover:shadow-xl dark:bg-[#2b3945]"
  >
    <router-link :to="{ name: 'SingleCountry', params: { id: country.name } }">
      <div class="split flex flex-col justify-between">
        <div>
          <img :src="country.flag" alt="/" class="h-56 rounded-t-lg" />
        </div>

        <div class="py-4 px-8 space-y-2 pb-8">
          <h2 class="py-4 font-bold text-xl">{{ country.name }}</h2>
          <p>
            <span class="font-bold">Population:</span>
            {{ country.population }}
          </p>
          <p>
            <span class="font-bold">Region:</span>
            {{ country.region }}
          </p>
          <p>
            <span class="font-bold">Capital:</span>
            {{ country.capital }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["country"],
  setup() {},
};
</script>
