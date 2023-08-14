import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './components/context/AnimatedRoutes';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='main-container'>
          <AnimatedRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
