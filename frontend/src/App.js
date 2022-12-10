import React, { useState } from "react";
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logeado } from "./components/Logeado"

function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

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
          'login': <Login onFormSwitch={toggleForm} />,
          'signup': <Register onFormSwitch={toggleForm} />,
          'logeado': <Logeado onFormSwitch={toggleForm} />
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
