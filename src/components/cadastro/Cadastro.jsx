import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Cadastro.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
    setIsVerified(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isVerified) {
      console.log("reCAPTCHA verificado!");
      console.log("Nome:", nome);
      console.log("CPF:", cpf);
      console.log("E-mail:", email);
      console.log("Senha:", senha);
      console.log("Enviado");
    } else {
      console.log("Por favor, verifique o reCAPTCHA!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastre-se na plataforma</h1>
        <div>
          <input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <ReCAPTCHA
          sitekey="6Lffo9MpAAAAAHsE_BToynl2fBucAI6e1n2ZPR5R"
          onChange={handleRecaptchaChange}
        />

        <button type="submit">Cadastrar</button>

        <p>
          Já tem uma conta? <a href="#" className="recall">Faça login</a>
        </p>
      </form>
    </div>
  );
}

export default Cadastro;