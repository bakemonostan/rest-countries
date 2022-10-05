<template>
  <main class="py-2 px-3">
    <InputBar />
    <h1 class="text-xl font-bold mt-6"> Hello world! </h1>
  </main>
</template>

<script>
import InputBar from '@/components/InputBar.vue';
export default {
  name: 'HomeView',
  components: { InputBar },
  setup() {},
};
</script>

