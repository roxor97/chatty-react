import './App.css';
import Auth from './helpers/Auth';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { auth } from './services/firebase-config';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
