import "./App.css";
import TodocontextProvider from "./context/TodocontextProvider";
import Alltodos from "./components/Alltodos";
import Todoinput from "./components/Todoinput";
function App() {
  return (
    <TodocontextProvider>
      <Todoinput />
      <Alltodos />
    </TodocontextProvider>
  );
}

export default App;
