import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todos, settodos] = useState([]);
  const [filteredTodos, setfilteredTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        settodos(json);
        setfilteredTodos(json);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          className="Search"
          onKeyUp={(e) => {
            const filteredTodos = todos.filter((todo) => {
              return todo.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            });
            setfilteredTodos(filteredTodos);
          }}
        ></input>
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
