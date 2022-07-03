import { Logo } from "../Logo";
import "./style.css";

export const Header = ({ setPage }) => {
  return (
    <header className="header">
      <Logo />
      <button className="header__btnHomePage" onClick={() => setPage(true)}>
        Início
      </button>
    </header>
  );
};
