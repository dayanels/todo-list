import styles from "./TaskList.module.css";

import clipboardImg from "../assets/clipboard.png";
import { TaskInterface } from "../App";
import { Task } from "./Task";

interface TaskListProps {
  data: TaskInterface[];
  onDeleteTask: (id: string) => void;
  onToggleStatusTask: (id: string) => void;
}

export function TaskList({
  data,
  onDeleteTask,
  onToggleStatusTask,
}: TaskListProps) {
  const criadas = data.length;

  const completadas = data.filter((item) => item.isCompleted != false);

  return (
    <div className={styles.container}>
      <header className={styles.headerTaskList}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{criadas}</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>{completadas.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {data.length == 0 ? (
          <>
            <img className={styles.clipboardImg} src={clipboardImg} alt="" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </>
        ) : (
          data.map((item) => {
            return (
              <>
                <Task
                  task={item}
                  onDeleteTask={onDeleteTask}
                  onToggleStatusTask={onToggleStatusTask}
                />
              </>
            );
          })
        )}
      </div>
    </div>
  );
}
