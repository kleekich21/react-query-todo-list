import React, { useState } from "react";
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
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
