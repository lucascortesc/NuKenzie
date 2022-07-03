import "./style.css";

export const NoCard = () => {
  return (
    <div className="noCard">
      <h2>Você ainda não possui nenhum lançamento</h2>
      <div className="noCard__imgs">
        <img src="./NoCard.svg" alt="" />
        <img src="./NoCard.svg" alt="" />
        <img src="./NoCard.svg" alt="" />
      </div>
    </div>
  );
};
