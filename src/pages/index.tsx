import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("@/layout/MainLayout"));
const Home = lazy(() => import("@/pages/home"));
const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <div className="bg-primary">{router}</div>;
};

export default memo(AppRouter);
