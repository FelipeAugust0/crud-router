import React, { useState } from "react";
import "./Login.css"

function Login({ onLogin }) {  // <-- adiciona aqui
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const randomSubmit = (e) => {
    e.preventDefault();
    onLogin(userName, password);
  }

  return (
    <div className="login-container">
        <form className="login-form" onSubmit={randomSubmit}>
            <h2>Agenda de Contatos</h2>
            <p>Faça login para continuar</p>
            <input 
                type="text" placeholder="Usuário"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}  
            />
            <input
                type="password" placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  
            />
            <button type="submit">Entrar</button> 
        </form>
    </div>
  );
}
export default Login;
