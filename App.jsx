import TodoList from "./component/TodoList/TodoList"
import AddTodo from "./component/AddTodo/AddTodo"
import TodoList from "./component/TodoList/TodoList"
import StrictMode from "./context/StrictMode"

function App() {
    const  [list, setList] = useState([
        {id: 1, todoData: 'todo 1', finished: false},
        {id: 2, todoData: 'todo 2', finished: true},
    ]);

  return (
    <StrictMode value={{list, setList}}>
      <AddTodo updateList={(todo) => setList([
        ...list, {id: list.length + 1, todoData: todo, finished: false}
        ])} />
      <TodoList />
    </StrictMode>
  )
}

export default App
