import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { UserTasks } from "../context/ManagerContext";
import { motion } from "framer-motion";
function CardTask({ task, setIsOpen }) {
  const { deleteItem, updateTask, handleCheked } = useContext(UserTasks);

  const handleUpdate = (id) => {
    setIsOpen(true);
    updateTask(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row gap-4"
    >
      <div className="w-full border p-4 shadow-md rounded-lg bg-gray-50 flex flex-col justify-between">
        <div>
          <h3 className="bg-gray-200 p-2 rounded-md font-bold">{task.title}</h3>
          <p className="my-4 font-semibold ">{task.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center mb-4">
            <input
              id={`checkbox-${task.id}`}
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleCheked(task.id)}
              className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
            />
            <label
              htmlFor={`checkbox-${task.id}`}
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Completed
            </label>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => deleteItem(task.id)}>
              <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer" />
            </button>
            <button onClick={() => handleUpdate(task.id)}>
              <PencilSquareIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardTask;
