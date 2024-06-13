import React from "react";
import { Todo } from "../types/todos";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Error Fetching Todo List");
  }
  return response.json();
};

const TodoCount: React.FC = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return <div>Total Todos: {data?.length}</div>;
};

export default TodoCount;
