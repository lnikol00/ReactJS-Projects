import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='main-container'>
          <Routes>

          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
