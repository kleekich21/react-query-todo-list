import React from "react";
import { Todo } from "../types/todos";

const addTodo = async (newTodo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) {
    throw new Error("Error: Creating new todo is failed");
  }

  return response.json();
};

const AddTodo: React.FC = () => {
  return <div>Add Todo</div>;
};

export default AddTodo;
