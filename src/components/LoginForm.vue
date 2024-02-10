<template>
  <div class="form-container">


    <img src="@/assets/img/logo.svg" class="logo">

    <div class="wrapper">
      <h3 class="form-title">
        Welcome to Personal Planer
      </h3>
      <p class="sub-title">Login to your account</p>
    </div>

    <div class="login-form">
      <CustomInput type="text" placeholder="Username" :value="formData.username"
                   @update:value="formData.username = $event"/>
      <CustomInput type="password" placeholder="password" :value="formData.password"
                   @update:value="formData.password = $event"/>
    </div>

    <div class="submit">
      <SubmitButton content="Login" :action="onclickAction"/>
    </div>
  </div>
</template>

<script>

import SubmitButton from "@/components/FormComponents/SubmitButton.vue";
import CustomInput from "@/components/FormComponents/CustomInput.vue";
import ApiManager from "@/services/ApiManager";
const CryptoJS = require("crypto-js");

export default {
  name: 'LoginForm',
  components: {

    SubmitButton,
    CustomInput,

  },
  data() {
    return {
      apiManager:new ApiManager(),
      formData: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    async onclickAction()  {
      this.formData.password=CryptoJS.MD5(this.formData.password).toString()


      let responce=await this.apiManager.sendToSignIn(this.formData);


      if(responce === this.formData.username){
        localStorage.setItem('username', responce);

      }else {
        console.log('failed')
      }
    },
  }
}
</script>

<style lang="scss">
@import "src/styles/form/LoginForm";
</style>
