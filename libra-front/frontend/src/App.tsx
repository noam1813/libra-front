import Home from "./pages/Home";
import CssBaseLine from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
        <CssBaseLine />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
