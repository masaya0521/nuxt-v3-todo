import { ref, Ref } from "vue";

type Todo = {
  id: number;
  title: string;
  content: string;
  status: Done;
};

// 指定したキーの値オブジェクトを持つ型になる
type Form = Pick<Todo, "title" | "content">;

type Done = "done" | "wip";

const KEY = "todo";

function fetch() {
  const todos: Ref<Todo[]> = ref<Todo[]>([
    {
      id: 1,
      title: "test",
      content: "testのコンテンツ",
      status: "wip",
    },
    {
      id: 2,
      title: "腹筋ローラー",
      content: "鬼の２分",
      status: "wip",
    },
  ]);
  return todos;
}

export function useTodo() {
  // 状態管理の宣言
  const todos = useState<Todo[]>(KEY, fetch);

  const todoList = computed(() => {
    return todos.value.filter((t) => t.status === "wip");
  });

  const doneList = computed(() => {
    return todos.value.filter((t) => t.status === "done");
  });

  function createTodo(form: Form): void {
    const lastId = Math.max(...todos.value.map((t) => t.id));
    todos.value.push({
      id: lastId + 1,
      title: form.title,
      content: form.content,
      status: "wip",
    });
  }

  function done(id: number) {
    todos.value.forEach((todo) => {
      if (todo.id === id) {
        todo.status = "done";
      }
    });
  }

  return {
    todos: readonly(todos),
    todoList,
    doneList,

    createTodo,
    done,
  };
}

export function useForm() {
  const form = ref<Form>({
    title: "",
    content: "",
  });

  function clear() {
    form.value = {
      title: "",
      content: "",
    };
  }

  return {
    form,
    clear,
  };
}
