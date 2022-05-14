import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ToDoListContent = () => {
  const contentList = useSelector((state) => state.content);
  return (
    <ol className="w-[100%] h-[100%] pt-[40px] pb-[45px] px-3 flex flex-col-reverse overflow-y-auto">
      {Object.keys(contentList)
        .map((i) => contentList[i])
        .map((item, i) => (
          <li
            key={i}
            className="flex items-center justify-start bg-white mb-2 p-1 rounded-[4px]">
            <input type="checkbox" className="mr-1 shrink-0" name="" id="" />
            <div className="grow">{item.text}</div>
            <button type="button" className="shrink-0">
              삭제
            </button>
          </li>
        ))}
    </ol>
  );
};

export default ToDoListContent;
