<template>
  <section>
    <Hero />
    <Detail />
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.divider {
  background: linear-gradient(
    270deg,
    rgba(255, 163, 163, 0) 0%,
    #ffa3a3 49%,
    rgba(255, 163, 163, 0) 49%,
    rgba(255, 163, 163, 0) 51%,
    #ffa3a3 51%,
    rgba(255, 163, 163, 0) 100%
  );
}
</style>
