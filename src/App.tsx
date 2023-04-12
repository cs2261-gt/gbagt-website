import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from "./components/global/Navbar"
import About from "./pages/About"
import Resources from "./pages/Resources"
import Documentation from "./pages/Documentation"
import HallOfFame from "./pages/HallOfFame"
import ErrorPage from "./pages/ErrorPage";

export default function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={ <About /> }></Route>
                  <Route path="/resources" element={ <Resources /> }></Route>
                  <Route path="/docs" element={ <Documentation /> }></Route>
                  <Route path="/hall-of-fame" element={ <HallOfFame /> }></Route>
                  <Route path='*' element={ <ErrorPage /> }/>
                </Routes>
              </BrowserRouter>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
