import React, { useState } from "react";
import TodoDetails from "./TodoDetails";
import { useTodoList } from "../queries/todos";

const TodoList: React.FC = () => {
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);
  const { data, isError, error } = useTodoList();

  if (isError) return <div>Error: {error?.message}</div>;

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
