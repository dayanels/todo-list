import { PlusCircle } from "phosphor-react";
import styles from "./Input.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface InputProps {
  handleNewTask: (description: string) => void;
}

export function Input({ handleNewTask }: InputProps) {
  const [textInput, setTextInput] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;

    setTextInput(text);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleNewTask(textInput);

    setTextInput("");
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>
      <input
        value={textInput}
        type="text"
        onChange={(e) => handleInputChange(e)}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar
        <PlusCircle size={24} />
      </button>
    </form>
  );
}
