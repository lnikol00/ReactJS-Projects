import './App.css';
import Output from './components/Output';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const [password, setPassword] = useState('')
  const [error, setError] = useState("")

  return (
    <div className="App">
      <Output password={password} error={error} />
      <Form setPassword={setPassword} setError={setError} />
    </div>
  );
}

export default App;
