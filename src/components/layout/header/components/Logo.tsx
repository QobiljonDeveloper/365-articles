import { memo } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="">
      <Link to={"/"} className="text-accent text-2xl">
        365 Articles
      </Link>
    </div>
  );
};

export default memo(Logo);
