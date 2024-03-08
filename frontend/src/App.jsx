import "./App.css";
import TodocontextProvider from "./context/TodocontextProvider";
import Alltodos from "./components/Alltodos";
import Todoinput from "./components/Todoinput";

function App() {
  return (
    <TodocontextProvider>
      <div className="bg-black border-gray-900 border-2">
        <h1 className="text-white text-5xl text-center mb-5 mt-3">Todos</h1>
        <Todoinput />
        <Alltodos />
      </div>
    </TodocontextProvider>
  );
}

export default App;
