import { useContext, useState } from "react";
import { UserTasks } from "../context/ManagerContext";
import CardTask from "./CardTask";
import NotFound from "./NotFound";
import FormModal from "./FormModal";

function AllTasks() {
  const { filteredTasks, filterStatus, setFilterStatus } =
    useContext(UserTasks);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {isOpen && <FormModal setIsOpen={setIsOpen} />}
      <div className="container pt-10">
        <select
          id="filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-100 focus:border-blue-100 text-gray-900 bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
        >
          <option value="all" className="text-gray-700 font-semibold">
            All
          </option>
          <option value="completed" className="text-green-600 font-semibold">
            Completed
          </option>
          <option value="incomplete" className="text-red-600 font-semibold">
            Incomplete
          </option>
        </select>
      </div>
      {filteredTasks.length ? (
        <div className="container mt-10 pb-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <CardTask key={task.id} task={task} setIsOpen={setIsOpen} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default AllTasks;
