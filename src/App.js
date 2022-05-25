import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./routes/home/home";
import Authenticate from "./routes/authentication/authentication";

const Shop = () => {
  return <h1>I be Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authenticate />} />
      </Route>
    </Routes>
  );
};

export default App;
