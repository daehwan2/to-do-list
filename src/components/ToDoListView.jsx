import React from "react";
import ToDoListInputForm from "./ToDoListInputForm";
const ToDoListView = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#B7C9EB] text-[#3F4756]">
      <ToDoListInputForm />
    </div>
  );
};

export default ToDoListView;
