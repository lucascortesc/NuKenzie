import "./style.css";

export const AddItem = ({
  setTransaction,
  fixedTransactions,
  setFixedTransactions,
}) => {
  const gerarId = () => {
    let maxId = 1;
    fixedTransactions.forEach(({ id }) => {
      maxId = id > maxId ? id : maxId;
    });
    return maxId + 1;
  };

  const addItem = (event) => {
    event.preventDefault();

    const price =
      event.target[1].value < 0
        ? event.target[1].value * -1
        : event.target[1].value;

    const transaction = {
      description: event.target[0].value,
      price: price,
      type: event.target[2].value,
      id: gerarId(),
    };

    setFixedTransactions([...fixedTransactions, transaction]);
    setTransaction([...fixedTransactions, transaction]);

    const btns = document.querySelectorAll(".header__list-buttons");

    btns.forEach((btn) => {
      const btnClass = btn.className.split(" ")[0];
      if (btnClass === "Todos") {
        btn.id = "selected";
      } else {
        btn.id = "notSelected";
      }
    });

    event.target[0].value = "";
    event.target[1].value = "";
  };

  return (
    <form
      className="form__addItem"
      action="#"
      onSubmit={(event) => addItem(event)}
    >
      <div className="form__desc">
        <label htmlFor="descricao">Descrição</label>
        <input
          name="descricao"
          type="text"
          placeholder="Digite aqui sua descrição"
          required
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="form__containerValor">
        <div className="form__valor">
          <label htmlFor="preco">Valor</label>
          <input name="preco" type="number" placeholder="1" required />
        </div>
        <div className="form__tipoValor">
          <label htmlFor="tipo">Tipo de valor</label>
          <select name="tipo" id="tipo">
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Saída</option>
          </select>
        </div>
      </div>
      <button>Inserir valor</button>
    </form>
  );
};
