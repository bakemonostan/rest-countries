<template>
  <main class="bg-[#fafafa] dark:bg-[#202c37]">
    <section class="max-w-screen-2xl mx-auto py-10 px-3">
      <div v-if="country" class="flex flex-col px-8 lg:flex-row lg:gap-10">
        <!-- flag -->
        <div class="flag basis-1/2">
          <img
            class="lg:h-[500px]"
            :src="country.flag"
            :alt="`flag of ${country.name}`"
          />
        </div>

        <!-- country details container -->
        <div class="details basis-1/2 lg:pt-16 lg:space-y-10">
          <h3 class="font-bold py-8 lg:py-4 lg:text-2xl">{{ country.name }}</h3>
          <div class="py-8 space-y-3 lg:py-2 lg:flex lg:justify-between">
            <div class="lg:space-y-2">
              <p>
                <span>Native name</span>
                : {{ country.name }}
              </p>
              <p>
                <span>Population</span>
                :
                {{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
              </p>
              <p>
                <span>Region</span>
                : {{ country.region }}
              </p>
              <p>
                <span>Sub Region</span>
                : {{ country.subregion }}
              </p>
              <p>
                <span>Capital</span>
                : {{ country.capital }}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain</span>
                : {{ country.topLevelDomain[0] }}
              </p>
              <p>
                <span>Currencies</span>
                : {{ country.currencies[0].name }}
              </p>
              <span>Languages:</span>
              <p class="inline ml-1" v-for="{ name } in country.languages" :key="name">
                {{ name }},
              </p>
            </div>
          </div>

          <div class="lg:flex gap-4 items-center">
            <span>Border Countries :</span>

            <div class="flex flex-wrap gap-2">
              <p
                class="px-8 py-2 rounded-md grow dark:bg-[#2b3945] dark:shadow-md md:grow-0"
                v-for="border in country.borders"
                :key="border"
              >
                {{ border }}
              </p>
            </div>
            <!-- {{ country.borders }} -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import getCountry from "@/composables/getCountry";

export default {
  props: ["id"],
  setup(props) {
    const { country, error, load } = getCountry(props.id);

    load();
    return { country, error, load };
  },
};
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
