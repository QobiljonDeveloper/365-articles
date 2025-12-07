import { memo } from "react";
import CoursesGrid from "../../../components/common/CourseGrid/CourseGrid";
import TitlesSection from "../../../components/common/TitlesSection/TitlesSection";

const Courses = () => {
  return (
    <div className="mt-10 mb-10">
      <TitlesSection
        subtitle={"Course Catalog"}
        title={"Master Every IELTS Skill"}
        description={
          "Comprehensive courses designed by expert teachers with guaranteed score improvement"
        }
      />
      <div className="mt-5">
        <CoursesGrid />
      </div>
    </div>
  );
};

export default memo(Courses);
