import React, { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Todo } from "../types/todos";
import TodoDetails from "./TodoDetails";

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Error Fetching Todo List");
  }
  return response.json();
};

const TodoList: React.FC = () => {
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);
  const { data } = useSuspenseQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id} onClick={() => setSelectedTodoId(todo.id)}>
          {todo.title}
          {selectedTodoId === todo.id && (
            <TodoDetails todoId={selectedTodoId} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
