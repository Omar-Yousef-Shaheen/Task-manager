import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-gray-100 shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <Link
            to="/"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-bold hover:text-blue-500 duration-500"
          >
            TASK MANGAER
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link
            to="allTask"
            className="text-lg font-semibold no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:text-blue-500 duration-500"
          >
            All Tasks
          </Link>
          <Link
            to="/"
            className="text-lg font-semibold no-underline text-grey-darkest hover:text-blue-dark ml-2 hover:text-blue-500 duration-500"
          >
            Add Task
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
