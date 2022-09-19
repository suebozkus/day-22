function List(props) {
  return (
    <>
      <input
        className="Search"
        placeholder="Filter"
        onKeyUp={(e) => {
          const filteredTodos = props.todos.filter((todo) => {
            return todo.title
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
          props.setfilteredTodos(filteredTodos);
        }}
      ></input>

      <button
        onClick={(e) => {
          if (props.completedState === "all") {
            props.setcompletedState(false);
          } else if (props.completedState === false) {
            props.setcompletedState(true);
          } else if (props.completedState === true) {
            props.setcompletedState("all");
          }
        }}
      >
        {props.completedState === "all"
          ? "Show open"
          : props.completedState === false
          ? "Show completed"
          : "Show all"}
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>UserID</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {props.filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td> {todo.id} </td>
              <td> {todo.title} </td>
              <td> {todo.userId} </td>
              <td> {todo.completed.toString()} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
