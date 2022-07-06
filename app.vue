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

// computed
const computed1 = computed(() => text + "computed1");
const computed2 = computed(() => text + "computed2");

// method
const test = () => {
  return console.log("test" + counter.value);
};

// createdわからん
setTimeout(() => {
  console.log("created");
}, 3000);

// usestate状態管理
const { counter, inc, dec } = useSharedCounter();

// mounted
onMounted(() => {
  console.log(counter.value);
});
</script>

<template>
  <div>
    <input v-model="dataReactive.toDoText" />
    <button @click="test">button</button>
  </div>
</template>
