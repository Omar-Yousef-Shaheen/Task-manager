// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import AllTasks from "./components/AllTasks";
import Layout from "./components/Layout";
import ManagerContext from "./context/ManagerContext";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <AddTask /> },
        { path: "allTask", element: <AllTasks /> },
      ],
    },
  ],
  {
    basename: "/Task-manager",
  }
);

function App() {
  return (
    <>
      <ManagerContext>
        <RouterProvider router={router} />
      </ManagerContext>
    </>
  );
}

export default App;
