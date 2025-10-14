import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importação das páginas
import Login from "./pages/Login/Login.js";


// Imoirtação do Navbar (menu principal)
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  // Estado global simples para o login e contatos
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleLogin = (username, password) => {
    // Lógica simples de autenticação (substitua pela sua lógica real)
    if (username === "admin" && password === "123") {
      setIsAuthenticated(true);
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  // Função de logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
}

export default App;