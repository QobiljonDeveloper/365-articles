import { memo } from "react";
import { Button } from "@/components/ui/button";

const HeaderButtons = () => {
  return (
    <div className="flex items-center gap-5">
      <Button className="border border-accent text-accent cursor-pointer bg-transparent hover:bg-accent hover:text-white">Login</Button>
      <Button className="border border-transparent bg-accent cursor-pointer hover:bg-accent hover:text-white text-black">Sign Up</Button>
    </div>
  );
};

export default memo(HeaderButtons);
