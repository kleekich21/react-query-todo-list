import React from "react";
import { useTodoList } from "../queries/todos";

const TodoCount: React.FC = () => {
  const { data, error, isPending, isError } = useTodoList();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  return <div>Total Todos: {data?.length}</div>;
};

export default TodoCount;
