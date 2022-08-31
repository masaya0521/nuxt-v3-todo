<script setup lang="ts">
import { CreateTodoBox } from "~~/.nuxt/components";
import { TodoList } from "~~/.nuxt/components";

const { data: data } = await useFetch(() => `http://localhost:8080/todos`);
console.log(data.value);
// const { data, pending, error, refresh } = await useAsyncData("todos", () =>
//   $fetch("/api/todos")
// );

// mounted
//onMounted(async () => {
//  const { data: data } = await useFetch(() => `/api/todos`);
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
