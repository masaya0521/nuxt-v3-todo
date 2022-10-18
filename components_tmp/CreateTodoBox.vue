<script setup lang="ts">
const { form, clear } = useForm();
const { createTodo: _createTodo } = useTodo();

function createTodo() {
  _createTodo(form.value);
  clear();
}
</script>

<template>
  <div>
    <input
      class="shadow h-10 w-48 px-4 py-2 m-2"
      placeholder="title"
      v-model="form.title"
    />
    <input
      class="shadow h-10 w-48 px-4 py-2 m-2"
      placeholder="content"
      v-model="form.content"
    />
    <button
      class="shadow text-gray-700 h-10 w-16 px-4 py-2 m-2"
      @click="createTodo()"
    >
      Add
    </button>
  </div>
</template>
