import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  createQueryKeys,
  inferQueryKeys,
} from "@lukemorales/query-key-factory";
import { Todo } from "../types/todos";
import axios from "axios";
import { delay } from "../utils";

const fetchTodos = async (): Promise<Todo[] | void> => {
  const delayPromise = delay(2500); // 의도적으로 일정 시간 동안 로딩 화면을 보여줘야하는 상황
  const fetchPromise = axios.get("https://jsonplaceholder.typicode.com/todos");

  const response = await Promise.all([delayPromise, fetchPromise])
    .then(([_, res]) => {
      return res;
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
      return { data: [] };
    });

  return response.data;
};

const fetchTodoById = async (id: number): Promise<Todo> => {
  const response = await axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error("Error Fetching Todo List");
    });
  return response.data;
};

export const todos = createQueryKeys("todos", {
  list: {
    queryKey: null,
    queryFn: fetchTodos,
  },
  detail: (todoId: number) => ({
    queryKey: [todoId],
    queryFn: () => fetchTodoById(todoId),
  }),
});

export function useTodoList() {
  return useSuspenseQuery(todos.list);
}

export function useTodoDetail(id: number) {
  return useQuery(todos.detail(id));
}

export type TodoKeys = inferQueryKeys<typeof todos>;
