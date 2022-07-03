import "./style.css";

export const TotalMoney = ({ transactions }) => {
  const total = transactions.reduce((acc, { price, type }) => {
    if (type === "Entrada") {
      return acc + Number(price);
    } else {
      return acc - Number(price);
    }
  }, 0);

  return (
    <div className="totalMoney">
      <h1>Valor total</h1>
      <p className={total > 0 ? "pos" : "neg"}>
        R${" "}
        {total.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        })}
      </p>
    </div>
  );
};
