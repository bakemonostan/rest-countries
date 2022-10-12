<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="bg-white shadow-md dark:bg-[#2b3945] dark:shadow-md">
    <nav class="max-w-[1200px] mx-auto flex justify-between items-center py-7 px-4">
      <div><h1 class="font-bold dark">Where in the world?</h1></div>
      <div>
        <button
          class="font-bold text-xs cursor-pointer text-white flex items-center gap-1"
          v-if="isDark"
          @click="toggleTheme()"
        >
          <v-icon name="co-moon" />
          Dark Mode
        </button>
        <button
          class="font-bold text-xs cursor-pointer text-black flex items-center gap-1"
          v-else
          @click="toggleTheme()"
        >
          <v-icon name="co-sun" />
          Light Mode
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
import { OhVueIcon } from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon,
  },

  setup() {
    const isDark = useDark();
    const toggleTheme = useToggle(isDark);
    return { isDark, toggleTheme };
  },
};
</script>

<style></style>
