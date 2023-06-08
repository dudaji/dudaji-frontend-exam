import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <>,
    children: [
      {
        index: true,
        element: <Navigate to="todoList" replace />,
      },
      {
        path: "/todoList",
        element: <TodoList />,
      },
      {
        path: "/todoDetail/:Id",
        element: <TodoDetail />,
      },
    ],
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;