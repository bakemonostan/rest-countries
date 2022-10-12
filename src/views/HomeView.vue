<template>
  <main class="h-full dark:bg-[#202c37]">
    <section class="max-w-[1200px] mx-auto py-2 px-3">
      <InputBar />
      <h1 class="text-xl font-bold mt-6">Hello world!</h1>
    </section>
  </main>
</template>

<script>
import InputBar from "@/components/InputBar.vue";
export default {
  name: "HomeView",
  components: { InputBar },
  setup() {},
};
</script>
