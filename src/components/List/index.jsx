import { Card } from "../Card";

export const List = ({
  transactions,
  setTransaction,
  fixedTransactions,
  setFixedTransactions,
}) => {
  const cardsTransactions = transactions.map((transaction, index) => (
    <Card
      transaction={transaction}
      setTransaction={setTransaction}
      productIndex={transaction.id}
      fixedTransactions={fixedTransactions}
      setFixedTransactions={setFixedTransactions}
      key={index}
      transactions={transactions}
    />
  ));

  return <div className="list__container">{cardsTransactions}</div>;
};
