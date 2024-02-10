<template>
  <div class="input-container">
    <input :type="type === 'password' && !showPassword ? 'password' : 'text'"
           :placeholder="placeholder"
           v-model="inputValue"
           @focus="handleFocus"
           @blur="handleBlur"
           @input="updateFormValue"
           class="custom-input" />
    <button v-if="type === 'password'" @click="togglePasswordVisibility" class="password-toggle-btn">
      <img :src="showPassword ? 'shown.png' : 'hidden.png'" class="password-status-icon" alt="">

    </button>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      isActive: false,
      showPassword: false,
      inputValue:this.value
    };
  },

  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: String,
  },

  methods: {
    updateFormValue() {
      this.$emit('update:value', this.inputValue)
    },
    handleFocus() {
      this.isActive = true;
    },
    handleBlur() {
      this.isActive = false;
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style  lang="sass">
@import "@/styles/form/CustomInpute.scss"
</style>
