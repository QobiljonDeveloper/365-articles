import { memo } from "react";
import TitlesSection from "../../../components/common/TitlesSection/TitlesSection";
import IeltsCards from "../../../components/common/IeltsCards/IeltsCards";

const MockTests = () => {
  return (
    <div className="mb-10 mt-10 flex items-center justify-center flex-col">
      <TitlesSection
        subtitle={"Mock Tests"}
        title={"Feel the Real IELTS Experience"}
        description={
          "Practice with realistic full-length tests that mirror the actual IELTS exam format"
        }
      />
      <IeltsCards />
    </div>
  );
};

export default memo(MockTests);
