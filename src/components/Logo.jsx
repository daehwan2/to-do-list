import React from "react";
import { RiCalendarTodoFill } from "react-icons/ri";

const Logo = ({ large }) => {
  return (
    <div className="flex items-center justify-center p-2">
      <RiCalendarTodoFill
        className={large ? "text-[50px] mr-1" : "text-[24px]"}
      />
      <strong className={large ? "text-[40px]" : ""}>ToDoList</strong>
    </div>
  );
};

export default Logo;
