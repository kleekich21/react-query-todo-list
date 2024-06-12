import React from "react";
import { useQuery } from "react-query";
import { Todo } from "../types/todos";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Error Fetching Todo List");
  }
  return response.json();
};

const TodoList: React.FC = () => {
  const { data, error, isLoading } = useQuery<Todo[], Error>(
    "todos",
    fetchTodos
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
