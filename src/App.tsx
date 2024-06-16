import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodoCount from "./components/TodoCount";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <ErrorBoundary fallback={<div> ERRROR! </div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <TodoCount />
          <TodoList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
