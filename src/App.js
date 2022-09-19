import "./App.css";
import { useState, useEffect } from "react";

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
        <input
          className="Search"
          placeholder="Filter"
          onKeyUp={(e) => {
            const filteredTodos = todos.filter((todo) => {
              return todo.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            });
            setfilteredTodos(filteredTodos);
          }}
        ></input>

        <button
          onClick={(e) => {
            if (completedState === "all") {
              setcompletedState(false);
            } else if (completedState === false) {
              setcompletedState(true);
            } else if (completedState === true) {
              setcompletedState("all");
            }
          }}
        >
          {completedState === "all"
            ? "Show open"
            : completedState === false
            ? "Show completed"
            : "Show all"}
        </button>

        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>UserID</th>
            <th>Completed</th>
          </tr>
          {filteredTodos.map((todo) => (
            <tr>
              <td> {todo.id} </td>
              <td> {todo.title} </td>
              <td> {todo.userId} </td>
              <td> {todo.completed.toString()} </td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
}

export default App;
