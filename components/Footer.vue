<template>
  <footer>
    <Logo />
    <a :href="github" target="_blank">
      (c){{ new Date().getFullYear() }} {{ name }}
    </a>
  </footer>
</template>

<script>
import Logo from "~/components/Logo";
import { mapState } from "vuex";

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapState("about", ["github", "name"]),
    // name() {
    //   return this.$store.state.about.name;
    // },
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: 0.3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>
