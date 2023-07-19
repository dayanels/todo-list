import { Header } from "./components/Header";
import { Input } from "./components/Input";
import "./global.css";
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

export interface TaskInterface {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function handleNewTask(description: string) {
    const newTask: TaskInterface = {
      id: uuidv4(),
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id: string) {
    const newArrayTask = tasks.filter((task) => task.id != id);

    setTasks([...newArrayTask]);
  }

  function handleToggleStatusTask(id: string) {
    const newArrayTask = tasks.map((task) => {
      if (task.id == id) {
        const t = {
          id: task.id,
          description: task.description,
          isCompleted: !task.isCompleted,
        };
        return t;
      } else {
        return task;
      }
    });

    setTasks([...newArrayTask]);
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <Input handleNewTask={handleNewTask} />
        <TaskList
          data={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleStatusTask={handleToggleStatusTask}
        />
      </main>
    </>
  );
}

export default App;
