import "./App.scss";
import Navbar from "./components/Navbar";
import Lotes from "./pages/Lotes";
import Administrador from "./pages/Administrador";

function App() {
  return (
    <>
      <Navbar/>
      <Administrador></Administrador>
    </>
  );
}

export default App;
