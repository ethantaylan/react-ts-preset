import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./context/context";
import { Home } from "./pages/Home";


export const App = () => {
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
