<template>
  <div class="select-container">
    <label class="select-label">{{ labelText }}</label>
    <select class="select" @change="updateFormValue" v-model="inputValue">
      <option value='English'>English</option>
      <option value="Russian">russian</option>

    </select>
  </div>
</template>


<script>
export default {
  name: "SelectInput",
  props: {
    labelText: {
      type: String,
      default: 'language'
    },
    value:{
      type:String,
      default: 'English'
    }
  },
 data(){return{
   inputValue:this.value
 }},
  methods:{
    updateFormValue() {
      this.$emit('update:value', this.inputValue)
    },
  }

}

</script>


<style scoped lang="scss">

@import "src/styles/form/SelectInpute.scss";
</style>
