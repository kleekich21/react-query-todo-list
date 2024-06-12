import React from "react";
import { Todo } from "../types/todos";
import { useQuery } from "react-query";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Error Fetching Todo List");
  }
  return response.json();
};

const TodoCount: React.FC = () => {
  const { data, error, isLoading } = useQuery<Todo[], Error>(
    "todos",
    fetchTodos
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>Total Todos: {data?.length}</div>;
};

export default TodoCount;
