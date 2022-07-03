import { Logo } from "../Logo/";
import "./style.css";

export const HomePage = ({ setPage }) => {
  return (
    <div className="homePage__container">
      <div className="homePage__main">
        <Logo />
        <h2>Centralize o controle das suas finanaças</h2>
        <h3>de forma rápida e segura</h3>
        <button onClick={() => setPage(false)}>Iniciar</button>
      </div>
      <div className="homePage__img">
        <img src="./homePageImg.jpg" alt="imgFigma" />
      </div>
    </div>
  );
};
