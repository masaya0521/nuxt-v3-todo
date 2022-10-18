import { ref, Ref } from "vue";
import axios, { AxiosResponse } from "axios";

type Todo = {
  id: number;
  title: string;
  content: string;
  status: Done;
};

type fetchTodo = {
  todo_id: string;
  user_id: string;
  title: string;
  content: string;
  status: string;
};

// 指定したキーの値オブジェクトを持つ型になる
type Form = Pick<Todo, "title" | "content">;

type Done = "done" | "wip";

const KEY = "todo";

function fetchTodoListFactory(): Ref<Todo[]> {
  console.log("enter");

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

  //const test = todos.value.map((todo) => console.log("test"));

  //const data: fetchTodo[] = fetchAxios() as unknown as fetchTodo[];
  /*
  const datas = data.map((todo, index) => {
    return {
      id: todo.todo_id,
      title: todo.title,
      content: todo.content,
      status: todo.status,
    };
  });

  let tmpTodos: Todo[];
  for(const todo of data){
    
  }
  */
  /*
  const test: Todo[] = data.map((todo, index) => {
    return {
      id: todo.todo_id,
      title: todo.title,
      content: todo.content,
      status: todo.status,
    };
  });
  */
  /*
  const todos: Ref<Todo[]> = ref<Todo[]>(
    data.map((todo, index) => {
      return {
        id: todo.todo_id,
        title: todo.title,
        content: todo.content,
        status: todo.status,
      };
    })
  );
  */

  return todos;
}

async function fetchAxios(): Promise<fetchTodo[]> {
  const data: fetchTodo[] = await $fetch(`/api/todos`);
  return data;
}

export function useTodo() {
  // 状態管理の宣言

  const todos = useState<Todo[]>(KEY, fetchTodoListFactory);

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
