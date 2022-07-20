<script setup lang="ts">
const text: string = "Hello, World!";

// data
const textRef = ref("ref data");
// data こっちの方がv2のdataに近い？
const dataReactive = reactive({
  form: {
    name: "",
  },
  users: [],
  toDoText: "",
});

const toDoText = ref("");
const { data } = await useFetch(() => `/api/user/1`);

// computed
const computed1 = computed(() => text + "computed1");
const computed2 = computed(() => text + "computed2");

// method
const test = () => {
  return console.log(data);
};

// createdわからん
setTimeout(() => {
  console.log("created");
}, 3000);

// usestate状態管理
const { counter, inc, dec } = useSharedCounter();

// mounted
onMounted(() => {
  console.log(data.value);
});
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col">
      <span class="text-gray-800 text-4xl my-16">ToDo List</span>
      <div class="flex flex-row">
        <input
          class="shadow h-10 w-48 px-4 py-2 m-2"
          v-model="dataReactive.toDoText"
        />
        <button
          class="shadow text-gray-800 h-10 w-16 px-4 py-2 m-2"
          @click="test"
        >
          add
        </button>
      </div>
    </div>
  </div>
</template>
