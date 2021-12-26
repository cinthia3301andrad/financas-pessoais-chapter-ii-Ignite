import { FormEvent, useState } from "react";

import Modal from "react-modal";

import iconIncome from "../../assets/income.svg";
import iconOutcome from "../../assets/outcome.svg";
import iconClose from "../../assets/close.svg";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");


   const moneyMask = (value: string) => {
    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
  
    const result = Number(value).toLocaleString('pt-br');

    return  result.toString();
  }
  
  /* handle - lidar com: ação do usuario */
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({ title, amount, category, type });

    setTitle("");
    setAmount("");
    setCategory("");
    setType("deposit");
    onRequestClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={iconClose} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          id="amount"
          placeholder="Valor"
          value={amount}
          onChange={(event) => {  
            setAmount(moneyMask(event.target.value));
              
          }}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={iconIncome} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={iconOutcome} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
