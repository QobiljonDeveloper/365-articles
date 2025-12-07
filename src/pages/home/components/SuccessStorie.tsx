import { memo } from "react";
import TestimonialsGrid from "../../../components/common/TestimonialsGrid/TestimonialsGrid";
import TitlesSection from "../../../components/common/TitlesSection/TitlesSection";

const SuccessStorie = () => {
  return (
    <div className="mt-10 mb-10">
      <TitlesSection
        subtitle={"Success Stories"}
        title={"Real Results From Real Students"}
        description={
          " Join thousands of students who achieved their target IELTS scores with 365 Articles"
        }
      />
      <div className="mt-5">
        <TestimonialsGrid />
      </div>
    </div>
  );
};

export default memo(SuccessStorie);
