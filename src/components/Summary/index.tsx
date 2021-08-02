import { useContext } from "react";
import { Container } from "./styles";

import iconIncome from "../../assets/income.svg";
import iconOutcome from "../../assets/outcome.svg";
import iconTotal from "../../assets/total.svg";

import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconIncome} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={iconOutcome} alt="Saidas" />
        </header>
        <strong>- R$100,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={iconTotal} alt="Total" />
        </header>
        <strong>R$900,00</strong>
      </div>
    </Container>
  );
}
