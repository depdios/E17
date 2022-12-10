import React, { useState } from "react";
//import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div>
    <header>
      <ul>
        <li><a 
          href="#"
          role="button"
          onClick={() => setCurrentForm('login')}>
          Iniciar Sesión
        </a></li>
        <li><a 
          href="#"
          role="button"
          onClick={() => setCurrentForm('signup')}>
          Registrarse
        </a></li>
      </ul>
    </header>
    <div className="App">
      {
        {
          'login': <Login />,
          'signup': <Register />
        }[currentForm]
      }
    </div>
    <footer className="footer">
      <p className="text-footer">
        Footer
      </p>
    </footer>
    </div>
  );
}

export default App;
