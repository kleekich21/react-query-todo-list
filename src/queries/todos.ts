import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  createQueryKeys,
  inferQueryKeys,
} from "@lukemorales/query-key-factory";
import { Todo } from "../types/todos";
import axios from "axios";
import { delay } from "../utils";

const fetchTodos = async (): Promise<Todo[] | void> => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(`ERROR: ${err}`);
    });

  return response.data;
};

const fetchTodosWithDelay = async (ms: number): Promise<Todo[] | void> => {
  const fetchPromise = fetchTodos();
  const data = await Promise.all([delay(ms), fetchPromise])
    .then(([_, data]) => {
      return data;
    })
    .catch((err) => {
      throw new Error(`ERROR: ${err}`);
    });
  return data;
};

const fetchTodoById = async (id: number): Promise<Todo> => {
  const response = await axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(`ERROR: ${err}`);
    });
  return response.data;
};

export const todos = createQueryKeys("todos", {
  count: {
    queryKey: null,
    queryFn: fetchTodos,
  },
  list: {
    queryKey: null,
    queryFn: () => fetchTodosWithDelay(2500),
  },
  detail: (todoId: number) => ({
    queryKey: [todoId],
    queryFn: () => fetchTodoById(todoId),
  }),
});

export function useTodoCount() {
  return useSuspenseQuery(todos.count);
}

export function useTodoList() {
  return useSuspenseQuery(todos.list);
}

export function useTodoDetail(id: number) {
  return useQuery(todos.detail(id));
}

export type TodoKeys = inferQueryKeys<typeof todos>;
