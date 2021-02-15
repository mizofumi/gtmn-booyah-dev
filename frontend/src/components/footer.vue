<template>
  <footer>
    <img class="footer-message" src="@/assets/footer/message.png" />

    <img class="footer-logo" src="@/assets/footer/logo.png" />

    <span>© 2021 げーたみん</span>

    <img class="eritoron" src="@/assets/footer/eritoron.png" />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "components-footer",
});
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  background: url("~@/assets/footer/background.png") center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
}

.footer-message {
  padding: 0 0 64px;
  width: 80%;
  max-width: 960px;
}

.footer-logo {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.eritoron {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 64px;
}
</style>
