import Menu from './components/Menu';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import TimeAttackPage from './components/TimeAttackPage';
import DriftPage from './components/DriftPage';
import { Routes, Route } from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} 
          />

          <Route 
            path="/drift" 
            element={<DriftPage />} 
          />
          
          <Route 
            path="/timeattack" 
            element={<TimeAttackPage />} 
          />
          
          <Route 
            path="/forza" 
            element={<ForzaPage />} 
          />
        </Routes>
      </div>
    </div>
  );
}
