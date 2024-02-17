import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route key={idx} {...route} />
      ))}
    </Routes>
  );
}

export default App;
