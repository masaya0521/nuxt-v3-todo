<script setup lang="ts">
const { todoList, doneList, done } = useTodo();

const { data: data } = await useFetch(() => `/todos`);
//console.log(data.value);

//const { data } = await useAsyncData("todos", () => $fetch("/api/todos"), {
//  initialCache: false,
//});
console.log(data.value);
</script>

<template>
  <div class="text-gray-700 m-5">
    <span class="text-2xl">ToDo</span>
    <ul class="shadow divide-y divide-gray-400">
      <li class="flex justify-between p-5" v-for="todo in todoList">
        <span class="w-48">title : {{ todo.title }} </span>
        <span class="w-48">content : {{ todo.content }} </span>
        <button class="shadow h-8 w-16" @click="done(todo.id)">Done</button>
      </li>
    </ul>
  </div>
  <div class="text-gray-700 m-5">
    <span class="text-2xl">Done</span>
    <ul class="shadow divide-y divide-gray-400">
      <li class="flex justify-between p-5" v-for="todo in doneList">
        <span class="w-48">title : {{ todo.title }} </span>
        <span class="w-48">content : {{ todo.content }} </span>
      </li>
    </ul>
  </div>
  {{ data }}
</template>
