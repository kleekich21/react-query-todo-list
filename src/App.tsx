import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList />
      </Suspense>
    </div>
  );
}

export default App;
