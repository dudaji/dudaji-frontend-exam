import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import TodoList from './pages/TodoList';


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
    ],
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;