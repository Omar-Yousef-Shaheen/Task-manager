import { useContext } from "react";
import { useState } from "react";
import { UserTasks } from "../context/ManagerContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigat = useNavigate();
  const { addTask, completedTasks } = useContext(UserTasks);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Math.floor(Math.random() * 1000),
      title: title,
      description: description,
      isCompleted: completedTasks,
    });
    setTitle("");
    setDescription("");
    navigat("allTask");
  };

  return (
    <div className="py-32 mx-5 ">
      <motion.form
        initial={{ x: -2000, opacity: 0.2 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto border p-10 rounded-md bg-slate-100"
      >
        <div className="flex flex-col gap-12">
          <div className="w-full max-w-sm min-w-[200px] flex flex-col gap-10">
            <input
              autoComplete="off"
              type="text"
              value={title}
              name="title"
              placeholder="Task Title"
              onChange={(e) => setTitle(e.target.value)}
              className="peer w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              autoComplete="off"
              value={description}
              name="description"
              placeholder="Task Description"
              onChange={(e) => setDescription(e.target.value)}
              className="peer w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 duration-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Add Task
          </button>
        </div>
      </motion.form>
    </div>
  );
}

export default AddTask;
