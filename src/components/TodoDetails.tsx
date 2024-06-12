import React from "react";
import { Todo } from "../types/todos";

const fetchTodoById = async (id: string): Promise<Todo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const TodoDetail: React.FC = () => {
  return <div>TodoDetail</div>;
};

export default TodoDetail;
