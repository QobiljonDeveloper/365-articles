import { memo } from "react";
import TeachersGrid from "@/components/common/TeacherGrid/TeachersGrid";
import TitlesSection from "../../../components/common/TitlesSection/TitlesSection";

const Team = () => {
  return (
    <section className="mt-10 mb-10 px-4 sm:px-6 lg:px-10 flex flex-col items-center">
      <TitlesSection
        subtitle="Expert Team"
        title="Meet the 365 Articles Team"
        description="Learn from certified IELTS experts with proven 8.5+ scores and years of teaching experience"
      />

      <div className="w-full">
        <TeachersGrid />
      </div>
    </section>
  );
};

export default memo(Team);
