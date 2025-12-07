import { memo } from "react";
import Hero from "./components/Hero";
import Team from "./components/Team";
import SuccessStorie from "./components/SuccessStorie";
import Courses from "./components/Courses";
import IeltsGoal from "./components/IeltsGoal";
import MockTests from "./components/MockTests";

const Home = () => {
  return (
    <div className="mt-10">
      <Hero />
      <Team />
      <SuccessStorie />
      <Courses />
      <IeltsGoal />
      <MockTests />
    </div>
  );
};

export default memo(Home);
