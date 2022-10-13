<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="bg-white shadow-md dark:bg-[#2b3945] dark:shadow-md">
    <nav class="max-w-screen-2xl mx-auto flex justify-between items-center py-7 px-4">
      <div><h1 class="font-bold dark">Where in the world?</h1></div>
      <div>
        <button
          class="font-bold text-xs cursor-pointer text-white flex items-center gap-1"
          v-if="isDark"
          @click="toggleTheme()"
        >
          Dark Mode
        </button>
        <button
          class="font-bold text-xs cursor-pointer text-black flex items-center gap-1"
          v-else
          @click="toggleTheme()"
        >
          Light Mode
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";

export default {
  components: {},

  setup() {
    const isDark = useDark();
    const toggleTheme = useToggle(isDark);
    return { isDark, toggleTheme };
  },
};
</script>

<style></style>
