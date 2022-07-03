import "./style.css";

export const Card = ({
  transaction,
  setTransaction,
  productIndex,
  fixedTransactions,
  setFixedTransactions,
  transactions,
}) => {
  const removeTransaction = (id) => {
    const FixedProductRemoved = fixedTransactions.filter(
      (el) => el.id !== Number(id)
    );
    const productRemoved = transactions.filter((el) => el.id !== Number(id));

    setFixedTransactions(FixedProductRemoved);
    setTransaction(productRemoved);
  };

  return (
    <div
      className={
        transaction.type === "Entrada" ? "card entrada" : "card despesa"
      }
      id={productIndex}
    >
      <div className="card__containerTitle">
        <h1>{transaction.description}</h1>
        <p>{transaction.type}</p>
      </div>
      <p className="price">
        R${" "}
        {Number(transaction.price).toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}
      </p>
      <i
        className="fa-solid fa-trash delete"
        onClick={(event) => removeTransaction(event.target.parentNode.id)}
      ></i>
    </div>
  );
};
