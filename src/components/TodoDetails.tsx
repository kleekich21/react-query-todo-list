import React from "react";
import { useTodoDetail } from "../queries/todos";

interface TodoDetailProps {
  todoId: number;
}

const TodoDetail: React.FC<TodoDetailProps> = ({ todoId }) => {
  const { data, error, isPending, isError } = useTodoDetail(todoId);

  if (isPending) return <div>Loding...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};

export default TodoDetail;
