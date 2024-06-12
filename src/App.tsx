import { Suspense } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodoCount from "./components/TodoCount";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoCount />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList />
      </Suspense>
    </div>
  );
}

export default App;
