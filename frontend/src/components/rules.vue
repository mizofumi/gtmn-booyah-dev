<template>
  <section>
    <h2>げーたみんマイクラでのルール</h2>

    <div class="rules">
      <article>
        <h3>木は木材を一つ残さず破壊しよう！</h3>
        <p>
          木材が残っていると葉っぱのみが浮いていて特に見るだけでA型が死ぬ光景になってしまうよ！<br />
          高いところや見えないところの木材を壊すのはめんどくさい！そんなあなたには素敵な植林場があるのでありがたく使おう！<br />
          使い終わったら苗木はしっかり生やして終えてね！
        </p>
      </article>

      <article>
        <h3>マイクラ世界でログインしたままの放置はダメ！</h3>
        <p>
          マイクラの世界はみんなで寝ないと夜がスキップできないよ！放置したまま夜を迎えると危険なモンスターが沢山！他のみんなが死んでしまうかも…。<br />
          作業も止まってしまうので放置ではなくログアウトをしよう！お花摘みは一言あれば全然OK！素敵なお花を摘んできてね！
        </p>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "components-rules",
});
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;

  > h2 {
    margin-bottom: 64px;
  }
}

.rules {
  width: 80%;
  max-width: 1080px;
  display: flex;
  align-items: flex-start;

  article {
    width: 50%;
    padding: 32px;
    margin: 0 8px;
    border: black solid 2px;
    border-radius: 8px;
  }
}
</style>
