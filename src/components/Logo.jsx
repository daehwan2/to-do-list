import React from "react";
import { RiCalendarTodoFill } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="flex items-center p-2">
      <RiCalendarTodoFill className="text-[24px]" />
      <strong>ToDoList</strong>
    </div>
  );
};

export default Logo;
