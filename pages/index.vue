<script setup lang="ts">
const { todoList } = useTodo();
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col">
      <span class="text-gray-800 text-4xl my-16">ToDo List</span>
      {{ todoList }}
    </div>
  </div>
</template>
