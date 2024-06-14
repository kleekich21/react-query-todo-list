import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  createQueryKeys,
  inferQueryKeys,
} from "@lukemorales/query-key-factory";
import { Todo } from "../types/todos";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Error Fetching Todo List");
  }
  return response.json();
};

const fetchTodoById = async (id: number): Promise<Todo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
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
