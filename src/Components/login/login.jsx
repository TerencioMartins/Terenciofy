import React from "react";
import { loginUrl } from "../../spotify";
import "./login.css";
import terenciofy from "../../assets/terenciofy.png"
import Sidebar from "../sidebar/sidebar";
import ParticleBackground from "../../particlesBackground";

function Login() {
  return (
    <div className="login">
      <ParticleBackground/>
      <img className="logo" src={terenciofy} />
      <a><b><i>Atenção:</i></b> Infelizmente o processo de autenticação do spotify WEB API passou a funcionar
        apenas com contas do spotify adicionadas <strong>manualmente</strong>,<br/> então peço perdão
        se aplicação não funcionar como esperava. Você pode checar o video do funcionamento
        no meu linkedin, clicando nesse banner.</a>

      <a href={loginUrl}>ENTRAR COM SPOTIFY</a>
    </div>
  );
}

export default Login;
