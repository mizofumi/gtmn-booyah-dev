<template>
  <header class="header">
    <div class="header-image-container">
      <h1 class="header-title">Welcome to げーたみん Minecraft</h1>

      <img class="header-image" src="http://placehold.jp/400x400.png" />
    </div>

    <button class="bgm-icon" @click="isPlayingBgm ? pauseBgm() : playBgm()">
      <span :class="{ inactive: !isPlayingBgm }" class="material-icons">
        volume_up
      </span>
      <div>
        <span :class="{ inactive: !isPlayingBgm }">on</span>/<span
          :class="{ inactive: isPlayingBgm }"
          >off</span
        >
      </div>
    </button>

    <p class="server-description">
      こちらはjava版、PS4以外の統合版Minecraftで利用できます。<br />
      みんなでワイワイするもより！時には1人で黙々やるのもよし！それぞれの楽しみ方でマナーを守りつつ素敵なマイクラライフを送りましょう！
    </p>

    <div class="status">
      <div class="server-status">
        <h3>現在サーバー</h3>
        <span>稼働中</span>
        <span>Ver.x.xx.xxx</span>
      </div>
      <div class="user-status">
        <h3 class="user-status-header">オンラインユーザー</h3>
        <div>john doe</div>
        <div>名無しの権兵衛</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "components-header",
  setup() {
    const bgm = new Audio();
    bgm.src = require("@/assets/main-theme.wav");
    bgm.load();
    bgm.volume = 0.05;

    const state = reactive({
      isPlayingBgm: false,
      bgmAudio: bgm,
    });

    const playBgm = () => {
      state.bgmAudio.play().then(() => {
        state.isPlayingBgm = !state.bgmAudio.paused;
      });
    };

    const pauseBgm = () => {
      state.bgmAudio.pause();
      state.isPlayingBgm = !state.bgmAudio.paused;
    };

    return {
      ...toRefs(state),
      playBgm,
      pauseBgm,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $background;
}

.bgm-icon {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 32px;
  right: 32px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  .inactive {
    opacity: 0.5;
  }
}

.header-image-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px;
}

.header-title {
  position: absolute;
  bottom: 64px;
  text-align: center;
}

.header-image {
  width: 400px;
  height: 400px;
}

.server-description {
  margin: 16px 32px 0;
  max-width: 630px;
}

.status {
  display: flex;
  margin: 32px;

  h3 {
    font-size: 14px;
    font-weight: 400;
  }
}

.server-status {
  text-align: center;
  padding: 8px 48px 16px;
  margin-right: 32px;
  margin-bottom: auto;
  background-color: white;
  border-radius: 8px;

  > * {
    display: block;
    margin: 8px 0;
  }
}

.user-status {
  display: flex;
  flex-wrap: wrap;

  > div {
    position: relative;
    height: 38px;
    padding: 8px 16px 8px 48px;
    background-color: white;
    border-radius: 100px;
    margin-right: 8px;
    margin-bottom: 8px;
  }
}

.user-status > div::before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: #bbbbbb;
  top: 4px;
  left: 4px;
  border-radius: 100px;
}

.user-status-header {
  width: 100%;
  flex: 0 0 auto;
}
</style>
