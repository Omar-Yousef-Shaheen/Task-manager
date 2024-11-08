import { XCircleIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { UserTasks } from "../context/ManagerContext";
import { motion } from "framer-motion";
function FormModal({ setIsOpen }) {
  const [updateTilte, setUpdateTilte] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const { updatingTask, editTask, allTask } = useContext(UserTasks);
  useEffect(() => {
    setUpdateTilte(updatingTask?.title);
    setUpdateDescription(updatingTask?.description);
  }, [updatingTask]);

  const handleSubmitUpdating = (e) => {
    e.preventDefault();
    editTask({
      title: updateTilte,
      description: updateDescription,
      id: updatingTask.id,
    });
    setUpdateTilte("");
    setUpdateDescription("");
    setIsOpen(false);
  };
  return (
    <div className="absolute w-full bg-slate-800 bg-opacity-90 h-full flex justify-center items-center">
      <motion.div
        initial={{ y: 1, opacity: 0, scale: 0.5 }}
        animate={{ y: 40, opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute  p-5 rounded-md bg-neutral-100 z-50  translate-y-[70px] md:translate-y-[220px] lg:translate-y-[100px] "
      >
        {" "}
        <button
          onClick={() => setIsOpen(false)}
          className="translate-x-[265px] md:translate-x-[556px] translate-y-[-8px]"
        >
          <XCircleIcon className="h-7 w-7 text-red-600" />
        </button>
        <form
          onSubmit={handleSubmitUpdating}
          className="mx-auto border p-10 rounded-md bg-neutral-200"
        >
          <div className="flex flex-col gap-12">
            <div className="w-full max-w-sm min-w-[200px] md:min-w-[500px] flex flex-col gap-10">
              <input
                type="text"
                value={updateTilte}
                name="title"
                placeholder="Title"
                onChange={(e) => setUpdateTilte(e.target.value)}
                className="peer w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
            </div>
            <div className="w-full max-w-sm min-w-[200px] md:min-w-[500px]">
              <input
                value={updateDescription}
                name="description"
                placeholder="Description"
                onChange={(e) => setUpdateDescription(e.target.value)}
                className="peer w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 duration-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Update
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default FormModal;
