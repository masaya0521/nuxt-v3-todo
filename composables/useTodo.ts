import { ref, Ref } from "vue";

type Todo = {
  id: number;
  title: string;
  content: string;
  status: Done;
};

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
  return {
    todos,
  };
}
