import { memo } from "react";
import Header from "@/components/layout/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/footer";
const MainLayout = () => {
  return (
    <div className="container mx-auto ">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
