import { memo } from "react";
import TitlesSection from "../../../components/common/TitlesSection/TitlesSection";
import IeltsWizard from "../../../components/common/IeltsWizard/IeltsWizard";

const IeltsGoal = () => {
  return (
    <div className="mt-10 mb-10 flex items-center justify-around flex-col">
      <TitlesSection
        subtitle={"Personalized Learning"}
        title={"What's Your IELTS Goal?"}
        description={
          "Answer three simple questions to identify your focus and get a personalized course plan"
        }
        cs_sty={"w-[200px]"}
      />
      <IeltsWizard />
    </div>
  );
};

export default memo(IeltsGoal);
