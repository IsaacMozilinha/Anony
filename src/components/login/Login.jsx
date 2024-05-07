import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
    setIsVerified(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isVerified) {
      console.log("reCAPTCHA verificado!");
      console.log("Enviado");
    } else {
      console.log("Por favor, verifique o reCAPTCHA!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse a plataforma</h1>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>

        

        <ReCAPTCHA
          sitekey="6Lffo9MpAAAAAHsE_BToynl2fBucAI6e1n2ZPR5R"
          onChange={handleRecaptchaChange}
        />

<a href="#" className="recall">
          Esqueceu a senha?
        </a>

        <button>Login</button>
      

        <p>
          Não tem uma conta? <Link to="/cadastro/Cadastro.jsx" className="recall">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
