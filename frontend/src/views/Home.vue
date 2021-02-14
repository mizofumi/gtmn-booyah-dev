<template>
  <gtm-header
    :version="serverStatus?.version"
    :status="serverStatus?.status"
    :playerList="playerStatus?.players"
  />
  <gtm-info />
  <gtm-album />
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive, toRefs } from "vue";

import GtmHeader from "@/components/header.vue";
import GtmInfo from "@/components/info.vue";
import GtmAlbum from "@/components/album.vue";
import {
  fetchPlayerStatus,
  fetchServerStatus,
  PlayerStatus,
  ServerStatus,
} from "@/apis/gtmn-api";

export default defineComponent({
  name: "Home",
  components: {
    GtmHeader,
    GtmInfo,
    GtmAlbum,
  },
  async setup() {
    const state = reactive({
      serverStatus: undefined as ServerStatus | undefined,
      playerStatus: undefined as PlayerStatus | undefined,
      timer: undefined as number | undefined,
    });

    const methods = {
      fetchStatus: async () => {
        state.serverStatus = await fetchServerStatus();
        state.playerStatus = await fetchPlayerStatus();

        state.timer = setTimeout(() => {
          methods.fetchStatus();
        }, 15000);
      },
    };

    onUnmounted(() => {
      clearTimeout(state.timer);
    });

    await methods.fetchStatus();

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped></style>
