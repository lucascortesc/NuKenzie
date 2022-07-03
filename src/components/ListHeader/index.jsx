import "./style.css";

export const ListHeader = ({ setListTransactions, fixedTransactions }) => {
  const filter = (event) => {
    const filterName = event.target.className.split(" ")[0];
    const btns = document.querySelectorAll(".header__list-buttons");

    btns.forEach((btn) => {
      const btnClass = btn.className.split(" ")[0];
      if (btnClass === filterName) {
        btn.id = "selected";
      } else {
        btn.id = "notSelected";
      }
    });

    if (filterName === "Todos") {
      setListTransactions(fixedTransactions);
    } else {
      setListTransactions(
        fixedTransactions.filter(({ type }) => {
          if (type === filterName) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  };

  return (
    <div className="header__list">
      <p>Resumo financeiro</p>
      <div className="header__list-filters">
        <button
          className="Todos header__list-buttons"
          id="selected"
          onClick={(event) => filter(event)}
        >
          Todos
        </button>
        <button
          className="Entrada header__list-buttons"
          onClick={(event) => filter(event)}
        >
          Entradas
        </button>
        <button
          className="Despesa header__list-buttons"
          onClick={(event) => filter(event)}
        >
          Despesas
        </button>
      </div>
    </div>
  );
};
