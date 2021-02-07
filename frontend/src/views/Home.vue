<template>
  <gtm-header />
  <article></article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GtmHeader from "@/components/header.vue";

export default defineComponent({
  name: "Home",
  components: {
    GtmHeader,
  },
});
</script>

<style lang="scss" scoped></style>
