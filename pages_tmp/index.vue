<script setup lang="ts">
import { CreateTodoBox } from "~~/.nuxt/components";
import { TodoList } from "~~/.nuxt/components";

//const { data: data } = await useFetch(() => `http://localhost:8080/todos`);
// console.log(data);

const data: fetchTodo[] = await $fetch(`/api/todos`);

type fetchTodo = {
  todo_id: string;
  user_id: string;
  title: string;
  content: string;
  status: string;
};
type Todo = {
  id: string;
  title: string;
  content: string;
  status: Done;
};

type Done = "done" | "wip";

const datas: Todo[] = data.map((todo, index) => {
  let tmpTodo: Todo;
  tmpTodo.id = todo.todo_id;
  tmpTodo.title = todo.title;
  tmpTodo.content = todo.content;
  tmpTodo.status = todo.status as Done;

  return tmpTodo;
});

console.log(datas);

/*
const computed1 = computed(() => {
  for(data){

  }
  return data;
});
*/
// mounted
//onMounted(async () => {
//  const data: Todo[] = await $fetch(`/api/todos`);
//});
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col">
      <span class="text-gray-800 text-4xl my-16">ToDo List</span>
      <CreateTodoBox />
      <TodoList />
    </div>
    {{ data }}
  </div>
</template>
