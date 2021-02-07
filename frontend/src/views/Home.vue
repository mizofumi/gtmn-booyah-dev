<template>
  <gtm-header />
  <gtm-info />
  <gtm-album />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GtmHeader from "@/components/header.vue";
import GtmInfo from "@/components/info.vue";
import GtmAlbum from "@/components/album.vue";

export default defineComponent({
  name: "Home",
  components: {
    GtmHeader,
    GtmInfo,
    GtmAlbum,
  },
});
</script>

<style lang="scss" scoped></style>
