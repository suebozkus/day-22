import "./App.css";
import { useState, useEffect } from "react";
import List from "./List";

function App() {
  const [todos, settodos] = useState([]);
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [completedState, setcompletedState] = useState("all");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        settodos(json);
        setfilteredTodos(json);
      });
  }, []);

  useEffect(() => {
    const filteredTodos = todos.filter((todo) => {
      if (completedState === "all") {
        return true;
      } else {
        return todo.completed === completedState;
      }
    });
    setfilteredTodos(filteredTodos);
  }, [completedState]);

  return (
    <div className="App">
      <header className="App-header">
        <List
          todos={todos}
          setfilteredTodos={setfilteredTodos}
          completedState={completedState}
          filteredTodos={filteredTodos}
          setcompletedState={setcompletedState}
        />
      </header>
    </div>
  );
}

export default App;
