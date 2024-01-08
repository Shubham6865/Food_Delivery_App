import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
