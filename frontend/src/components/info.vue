<template>
  <section class="info-panel">
    <article class="info-article">
      <h2>NEWS</h2>
      <span class="info-datetime">2021.x.x xx:xx</span>
      <p class="info-content">メンテナンス・障害情報に関するテキスト</p>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "components-info",
});
</script>

<style lang="scss" scoped>
.info-panel {
  padding: 32px 16px;
}

.info-article {
  display: flex;
  align-items: center;
  border-radius: 100px;
  border: 1px solid $border;
  background-color: $background;
  padding: 8px 32px;

  h2 {
    font-size: 16px;
    margin-right: 16px;
    flex: 0 0 auto;
  }

  .info-datetime {
    margin-right: 32px;
    flex: 0 0 auto;
  }

  .info-content {
    flex: 1 1 auto;
  }
}
</style>
