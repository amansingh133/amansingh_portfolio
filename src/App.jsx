import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import { createContext, useContext } from 'react';

export const ThemeContext = createContext(null);
export const useThemeCtx = () => useContext(ThemeContext);

export default function App() {
  const { theme, toggle } = useTheme();
  const location = useLocation();

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className="noise-overlay" />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"         element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ThemeContext.Provider>
  );
}
