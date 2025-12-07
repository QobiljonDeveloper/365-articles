import { memo } from "react";

interface TitleProps {
  subtitle: string;
  title: string;
  description: string;
  cs_sty?: any;
}

const TitlesSection = ({
  subtitle,
  title,
  description,
  cs_sty,
}: TitleProps) => {
  return (
    <div className="flex items-center justify-center flex-col text-center lg:text-left">
      <p
        className={`w-[150px] sm:w-[180px] md:w-[200px] text-center px-2 py-1 font-normal bg-accent text-black rounded-3xl ${cs_sty}`}
      >
        {subtitle}
      </p>
      <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mt-2">
        {title}
      </h2>
      <p className="text-secondary font-normal mt-2 max-w-full sm:max-w-[80%] md:max-w-[60%]">
        {description}
      </p>
    </div>
  );
};

export default memo(TitlesSection);
