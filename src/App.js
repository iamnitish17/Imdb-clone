// import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie';
import Search from './Components/Search';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Actor from './Components/Actor';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:'/search/:movie',
      element:<Search/>,
    },
    {
      path:'/movie/:movieId',
      element:<Movie/>,
    },
    {
      path:'/actor/:actorId',
      element:<Actor/>,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
