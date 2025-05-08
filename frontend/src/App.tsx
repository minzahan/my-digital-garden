import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DevMode90 from './pages/DevMode90';
import About from './pages/SoftwareEngineer/About';
import TechStack from './pages/SoftwareEngineer/TechStack';
import Projects from './pages/SoftwareEngineer/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<Dashboard />} />
          <Route path="dev-mode-90" element={<DevMode90 />} />
          <Route
            path="software-engineer"
            element={<Navigate to="/software-engineer/about" replace />}
          />
          <Route path="software-engineer/about" element={<About />} />
          <Route path="software-engineer/tech-stack" element={<TechStack />} />
          <Route path="software-engineer/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
