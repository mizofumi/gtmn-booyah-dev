<template>
  <section>
    <h2>げーたみんマイクラアルバム</h2>

    <p>写真とかの場所</p>

    <div class="button-area">
      <button>もっと見る</button>
      <button>アルバムに画像を追加する</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "components-album",
});
</script>

<style lang="scss" scoped>
section {
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 16px;
}

.button-area {
  max-width: 500px;

  > button {
    width: 100%;
    height: 40px;
    margin: 16px 0;
    background-color: white;
    border-radius: 100px;
    border: 1px solid $border;
  }
}
</style>
