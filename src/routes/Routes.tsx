import { RouteObject, useRoutes } from "react-router-dom";
import Path from "./paths";
import Layout from "../components/Layout/Layout";
import Generator from "../components/screens/generator/Generator";
import Favorites from "../components/screens/favorites/Favorites";
const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: Path.App,
      element: <Layout />,
      children: [
        { path: Path.Generator, element: <Generator /> },
        { path: Path.Favorites, element: <Favorites /> },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Routes;
