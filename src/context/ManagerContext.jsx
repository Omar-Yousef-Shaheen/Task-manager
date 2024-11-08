import { createContext, useEffect, useState } from "react";

export const UserTasks = createContext();

function ManagerContext({ children }) {
  const [allTask, setAllTask] = useState(
    JSON.parse(localStorage.getItem("list-task")) || []
  );

  const [filterStatus, setFilterStatus] = useState(
    localStorage.getItem("filter-status") || "all"
  );
  const [updatingTask, setUpdatingTask] = useState("");

  useEffect(() => {
    localStorage.setItem("list-task", JSON.stringify(allTask));
  }, [allTask]);

  useEffect(() => {
    localStorage.setItem("filter-status", filterStatus);
  }, [filterStatus]);

  const addTask = (task) => {
    setAllTask([...allTask, { ...task, isCompleted: false }]);
  };

  const deleteItem = (id) => {
    const filterTask = allTask.filter((item) => item.id !== id);
    setAllTask(filterTask);
  };

  const updateTask = (id) => {
    const taskUpdating = allTask.find((task) => task.id === id);
    setUpdatingTask(taskUpdating);
  };

  const editTask = (task) => {
    const afterUpdate = allTask.map((item) => {
      return item.id === task.id ? task : item;
    });
    setAllTask(afterUpdate);
  };

  const handleCheked = (id) => {
    const updatedTasks = allTask.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setAllTask(updatedTasks);
  };

  const filteredTasks = allTask.filter((task) => {
    if (filterStatus === "completed") return task.isCompleted;
    if (filterStatus === "incomplete") return !task.isCompleted;
    return true;
  });

  return (
    <UserTasks.Provider
      value={{
        allTask,
        setAllTask,
        deleteItem,
        addTask,
        handleCheked,
        filterStatus,
        setFilterStatus,
        filteredTasks,
        updateTask,
        editTask,
        updatingTask,
      }}
    >
      {children}
    </UserTasks.Provider>
  );
}

export default ManagerContext;
