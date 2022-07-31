<script setup lang="ts">
import { CreateTodoBox } from "~~/.nuxt/components";
import { TodoList } from "~~/.nuxt/components";
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col">
      <span class="text-gray-800 text-4xl my-16">ToDo List</span>
      <CreateTodoBox />
      <TodoList />
    </div>
  </div>
</template>
