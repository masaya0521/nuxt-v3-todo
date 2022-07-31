import { ref, Ref } from "vue";

type Todo = {
  id: number;
  title: string;
  content: string;
  status: Done;
};

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

  const todolist = computed(() => {
    return todos.value.filter((t) => t.status === "wip");
  });

  const doneList = computed(() => {
    return todos.value.filter((t) => t.status === "done");
  });

  return {
    todos,
  };
}
