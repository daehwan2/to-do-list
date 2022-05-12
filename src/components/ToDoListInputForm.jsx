import React from "react";
import { BsPlusSquare } from "react-icons/bs";

const ToDoListInputForm = () => {
  return (
    <form className="bg-white flex items-center w-[100%] h-[45px] fixed bottom-0">
      <button type="button" className="p-2">
        <BsPlusSquare className="text-[24px]" />
      </button>
      <input type="text" placeholder="내용 입력" className="grow" />
      <button
        type="submit"
        className="border-[#3F4756] border-[2px] rounded-[4px] px-2 mx-2">
        입력
      </button>
    </form>
  );
};

export default ToDoListInputForm;
