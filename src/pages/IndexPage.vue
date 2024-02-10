<template>
  <div class="login-page">
  <Login-form />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name:"IndexPage",
  setup() {
    return {}
  },
  mounted() {
  },
  components:{
    LoginForm,

  }
}
</script>

<style lang="scss" scoped>

@import "src/styles/pages/Index";
</style>
