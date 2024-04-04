import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeFlavors from './pages/HomeFlavors';
import Schedule from './pages/Schedule';
import FurssanFC from './pages/FurssanFC';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/homeFlavors" element={<HomeFlavors />} />
          <Route path="/furssanFC" element={<FurssanFC />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;