<script setup lang="ts">
// const text: string = "Hello, World!";

// data
// const post = ref("ref data");
// const fetchUserList = ref();

const { data: post } = await useFetch(() => `/api/users`);
// const { users } = await useFetch(() => `/api/users`);

// computed
// const computed1 = computed(() => useFetch(() => `/api/user/3`));
// const computed2 = computed(() => text + "computed2");

onMounted(() => {
  // console.log(useFetch(() => `/api/users`));
});

const test = () => {
  return console.log(useFetch(() => `/api/users`));
};
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col">
      <span class="text-gray-800 text-4xl my-16">ToDo List</span>
      <div class="flex flex-row">
        <input class="shadow h-10 w-48 px-4 py-2 m-2" />
        <button
          class="shadow text-gray-800 h-10 w-16 px-4 py-2 m-2"
          @click="test"
        ></button>
        {{ post }}
      </div>
    </div>
  </div>
</template>
