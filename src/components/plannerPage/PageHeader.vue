

<template>
<div class="header">
  <img src="@/assets/img/logo.svg" class="logo">

  <div class="title-container"><h3 class="title">Hello </h3> <h4 class="user-name">{{username}}</h4></div>

  <button class="add-task" v-on:click="addButtonClick">
    +
  </button>
  <div v-if="addWindowStatus" class="add-window" >
    <AddForm></AddForm>
  </div>
</div>
</template>


<script>
import AddForm from "@/components/plannerPage/AddForm.vue";
export default {
  name: "PageHeader",

  data() {
    return {
      username:null,
      addWindowStatus:false,

    }
  },
  components:{
    AddForm
  },
  mounted() {
    this.username = localStorage.getItem("username");
  },
  methods:{
    addButtonClick(){
      this.addWindowStatus=!this.addWindowStatus
    }
  }
}
</script>

<style scoped lang="scss">

.header{
  background-color: #2B2824;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 25px;

  .add-task{
    background-color: #b82065;
    font-size: 25px;
    color: white;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 5px;
  }

  .add-window{
    position: absolute;
    max-width: 450px;
    right: 50px;
    top: 70px;
  }

  .logo{
    height: 40px;
    width: 40px;

  }

  .title-container{
    display: flex;
    align-items: end;
    .title{
      font-size: 28px;
      color: white;
      margin: 0 8px;
      font-family: Mallanna;
      text-align: center;
      height: 34px;
    }
    .user-name{
      font-size: 32px;
      color: white;
      font-family: monospace;
      color: #d7156f;
    }
  }
}

</style>
