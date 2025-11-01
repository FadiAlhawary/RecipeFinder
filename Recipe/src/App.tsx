import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { useState } from 'react';
import NavBar from './components/NAV Bar/NavBar';
import { ColorModeProvider } from './components/ui/color-mode';
function App() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  return (
    <>
      <ColorModeProvider forcedTheme={colorMode}>
        <NavBar colorMode={colorMode} setColorMode={setColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/recipes" element={<Recipes />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </ColorModeProvider>
    </>
  );
}

export default App;
