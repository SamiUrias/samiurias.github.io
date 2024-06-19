import { ReactNode } from "react";
import {motion} from "framer-motion";

interface ITabButtonProps {
  active: boolean;
  selectTab: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const variants = {
    default: {width:0},
    active: {width: "calc(100% - 0.75rem)"}
}
export const TabButton = ({ active, selectTab, children }: ITabButtonProps) => {
  const buttonClasses = active
    ? "text-white " //border-b border-purple-500
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <span className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </span>
        <motion.div animate={active?"active":"default"} variants={variants} className="h-1 bg-primary-500 mr-3"></motion.div>
    </button>
  );
};
