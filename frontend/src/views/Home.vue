<template>
  <gtm-header
    :version="serverStatus?.version"
    :status="serverStatus?.status"
    :playerList="playerStatus?.players"
  />
  <gtm-info />
  <gtm-album />
  <gtm-rules />
  <gtm-access />
  <gtm-footer />
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive, toRefs } from "vue";

import GtmHeader from "@/components/header.vue";
import GtmInfo from "@/components/info.vue";
import GtmAlbum from "@/components/album.vue";
import GtmRules from "@/components/rules.vue";
import GtmAccess from "@/components/access.vue";
import GtmFooter from "@/components/footer.vue";

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
    GtmRules,
    GtmAccess,
    GtmFooter,
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
