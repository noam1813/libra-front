import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import CssBaseLine from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Box } from "@mui/material";

const mdTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EF5350",
    },
    success: {
      main: "#4caf50",
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <CssBaseLine />
        <Header />
        <Box sx={{flexGrow:1,mt:'64px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </Box>
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
