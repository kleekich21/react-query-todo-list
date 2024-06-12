import React from "react";
import { useQuery } from "react-query";
import { Todo } from "../types/todos";

const fetchTodoById = async (id: number): Promise<Todo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

interface TodoDetailProps {
  todoId: number;
}

const TodoDetail: React.FC<TodoDetailProps> = ({ todoId }) => {
  const { data, error, isLoading } = useQuery<Todo, Error>(
    ["todo", todoId],
    () => fetchTodoById(todoId)
  );

  if (isLoading) return <div>Loding...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default TodoDetail;
