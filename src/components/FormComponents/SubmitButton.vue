<template>
    <button v-on:click="action" class="login-submit"><p class="content">{{ content }}</p></button>
</template>

<script>
export default{
    name:"LoginSubmit",
    props:{
        content:{
            type:String,
            required:true,
        },
        action:{
          type:Function,
          required: true,
        }
    }
}
</script>
<style scoped lang="scss">
@import "src/styles/form/SubmitButton.scss";
</style>
