import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

import iconCheck from "../assets/iconCheck.svg";
import iconChecked from "../assets/iconChecked.svg";

interface TaskInterface {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface TaskInterfaceProps {
  task: TaskInterface;
  onToggleStatusTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({
  task,
  onDeleteTask,
  onToggleStatusTask,
}: TaskInterfaceProps) {
  return (
    <div className={styles.cardTask}>
      <button onClick={() => onToggleStatusTask(task.id)}>
        {task.isCompleted ? (
          <img className={styles.check} src={iconChecked} alt="" />
        ) : (
          <img className={styles.check} src={iconCheck} alt="" />
        )}
      </button>
      <p>{task.description}</p>
      <button
        onClick={() => onDeleteTask(task.id)}
        className={styles.iconTrash}>
        <Trash />
      </button>
    </div>
  );
}
