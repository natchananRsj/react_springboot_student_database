import logo from './logo.svg';
import './App.css';
import { AppBar } from '@mui/material';
import Appbar from './components/Appbar';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Student/>
    </div>
  );
}

export default App;
