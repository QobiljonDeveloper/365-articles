import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./not-found/NotFound";

const MainLayout = lazy(() => import("@/layout/MainLayout"));
const Home = lazy(() => import("@/pages/home"));
const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ index: true, element: <Home /> }],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return <div className="bg-primary">{router}</div>;
};

export default memo(AppRouter);
