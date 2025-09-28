import { createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import Layout from './layout'
import Home from './pages/home';
import About from './pages/about';
import Demo01 from './pages/demo01';
import Demo02 from './pages/demo02';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About />},
      { path: "/demo01", element: <Demo01 />  },
      { path: "/demo02", element: <Demo02 /> },
    ]
  }]);

export default function AppRouters() {
  return (
    <RouterProvider router={router} />
  )
}
