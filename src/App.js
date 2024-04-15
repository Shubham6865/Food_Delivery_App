import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store';



function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </Router>

      </div>
    </Provider>
  );
}

export default App;
