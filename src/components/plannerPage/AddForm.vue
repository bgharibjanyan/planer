<template>
  <div class="form-window">
    <h2 class="form-title">Create New Task</h2>
    <form @submit.prevent="handleSubmit" class="add-form">
      <div class="field">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="formData.title" >
      </div>


      <div class="field">
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="formData.date" >
      </div>

      <div class="field">
        <label for="time">Time:</label>
        <input type="time" id="time" v-model="formData.time" >
      </div>

      <div class="field">
        <label for="important">Important:</label>
        <input type="checkbox" id="important" v-model="formData.important">
      </div>

      <label for="description">Description:</label>
      <textarea id="description" v-model="formData.description" ></textarea>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Task from "@/models/task";
import ApiManager from "@/services/ApiManager";

export default {
  data() {
    return {
      api:new ApiManager(),
      formData: {
        title: '',
        description: '',
        date: '',
        time: '',
        important: false
      }
    };
  },
  methods: {
    handleSubmit() {
      const {title, description, date, time, important} = this.formData;


      const parsedDate = new Date(date);


      const timeParts = time.split(':');
      const parsedTime = parsedDate;
      parsedTime.setHours(parseInt(timeParts[0], 10));
      parsedTime.setMinutes(parseInt(timeParts[1], 10));

      const newTask = new Task(title, description, parsedDate, parsedTime, important);



      console.log(this.api.addToTasks(newTask));

      this.formData = {
        title: '',
        description: '',
        date: '',
        time: '',
        important: false
      };
    }
  }
};
</script>
<style>
.form-window {
  background-color: #b82065;
  border-radius: 10px;

}

.add-form {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: rgba(213, 211, 211, 0.66);
  padding: 35px 15px;
  border-radius: 5px;
  padding-bottom: 0;

  .field {
    display: flex;
    align-items: center;

    label {
      margin-right: 5px;
    }
  }

  input {
    background-color: rgba(255, 255, 255, 0.36);
    border: none;
    outline: none;
    margin: 10px 0;
    height: 20px;
    border-radius: 5px;
    padding: 0 5px;
  }
}

.form-title {
  color: white;
  font-family: Mallanna, serif;
  line-height: 2;
}

textarea {
  width: 98%;
  background-color: rgba(255, 255, 255, 0.36);
  border: none;
  outline: none;
  overflow: hidden;
  resize: none;
}

.submit-button {
  width: -webkit-fill-available;
  background-color: #b82065;
  color: white;
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
  line-height: 18px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 25px -15px 0;
}

</style>
