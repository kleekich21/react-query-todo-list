import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTodo,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      window.alert(
        "New Todo Successfully Created!\nNote: 안타깝게도 리스트 반영은 API에서 제공하지 않습니다."
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, completed: false });
    setTitle("");
  };

  if (mutation.isPending) return <div>Adding todo...</div>;
  return (
    <form onSubmit={handleSubmit}>
      {mutation.error && (
        <h5 onClick={() => mutation.reset()}>{mutation.error.message}</h5>
      )}
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
