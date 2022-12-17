<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn>
      <v-icon color="yellow" left class="mr-2">fas fa-file</v-icon>My ToDo List
    </v-btn>
    <v-spacer></v-spacer>
      <v-btn  class="text-yellow" href="/home">Home</v-btn>
      <v-btn href="/home">About Us</v-btn>
      <v-btn href="/home">Contact</v-btn>
  </v-app-bar>
  <v-app class="todoView" style="background-color: #FBDF7E;">
      <!-- <div style="position: relative; z-index: 9999; bottom: 90px; right: 65px;" class="mt-16">
        <v-img src="notebook.png" contain max-height="350"></v-img>
      </div> -->
    <v-col class="mt-6">
      <div class="rectangle">
        <h2 style="text-align: center;">My ToDo List</h2>
        <div class="main">
          <v-form ref="form">
            <v-text-field
              v-model="title"
              :counter="100"
              name="name"
              label="Title"
            ></v-text-field>
            <v-text-field
              v-model="description"
              name="description"
              label="Description"
            ></v-text-field>
            <v-btn
              class="submit-button"
              @click="addTodo"
            >
              Add ToDo
            </v-btn>
          </v-form>
            <div class="todo-container">
              <v-list-group class="form">
                <v-list-item v-for="(todo, i) in todos" :key="todo._id">
                  <v-list-item-title class="todo-name">{{ todo.title }}</v-list-item-title>
                  <v-list-item-title class="todo-description">{{ todo.description }}</v-list-item-title>
                  <v-btn
                    class="delete-btn"
                    @click="removeTodo(todo, i)"
                  >
                    Delete ToDo
                  </v-btn>
                </v-list-item>
              </v-list-group>
            </div>
        </div>
      </div> 
    </v-col>
  </v-app>
  <FooterView />
</template>
 
<script>

import FooterView from '@/components/FooterView.vue';
 
 import axios from "axios";
 export default {
  components: {
    FooterView
  },
   data() {
       return {
         todos: [],
         description: "",
         title: "",
       }
   },
   async mounted() {
       const response = await axios.get("api/todoList");
       this.todos = response.data;
     },
   methods: {
       async addTodo(e) {
         e.preventDefault();
         const response = await axios.post("api/todoList", {
           title: this.title,
           description: this.description
         });
         this.todos.push(response.data);
         this.title = "";
         this.description = "";
       },
     async removeTodo(item, i) {
         await axios.delete("api/todoList/" + item._id);
         this.todos.splice(i, 1);
     },
   }
 }
 
</script>
 
<style>
 .main {
    margin: auto;
    margin-top: 3rem;
    max-width: 400px;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input {
    width: 100%;
    padding: 10px;
  }
  .submit-button {
    width: 400px;
    padding: 10px;
    background-color: #FFC801;
    color: white;
    cursor: pointer;
  }
  .todo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .todo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    max-width: 250px;
  }
  .todo-name {
    font-size: 18px;
    font-weight: bold;
  }
  .todo-description {
    max-width: 70%;
    font-size: 14px;
  }
  .delete-btn {
    background-color: #FF5151;
    color: white;
    padding: 10px;
    cursor: pointer;
    border: none;
  }
  .rectangle {
    display: block;
    background-color: #FFFF;
    padding: 20px;
    padding-top: 20px;
    padding-bottom: 100px;
    margin-top: 50px;
    margin-left: 350px;
    margin-right: 350px;
    border-radius: 10px;
  }
</style>
 