<template>
  <main class="bg-[#fafafa] dark:bg-[#202c37]">
    <section class="max-w-screen-2xl mx-auto py-2 px-3">
      <div v-if="country">
        <h3>comp</h3>
        <p>{{ Object.keys(country.currencies).toString() }}</p>
        <p>{{ Object.values(country.languages).toString() }}</p>
        <p>{{ country.name.common }}</p>
        <!-- <p>{{ country.currencies.name }}</p>
        <p>{{ country.languages }}</p> -->
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
