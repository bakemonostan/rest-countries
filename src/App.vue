<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default { components: { Navbar } };
</script>

<style>
html.dark {
  color-scheme: dark;
}
</style>
