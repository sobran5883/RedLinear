import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import Team from "./pages/Team";
import Usecase from "./pages/Usecase/Usecase";
import Hardware from "./pages/Hardware";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/team" element={< Team/>} />
          <Route path="/usecase" element={< Usecase />} />
          <Route path="/hardware" element={< Hardware />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
