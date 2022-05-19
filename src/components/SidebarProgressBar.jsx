import React from "react";

const SidebarProgressBar = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h2>일정 진행률</h2>
      <div className="w-[180px] h-[180px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
        <div className="w-[150px] h-[150px] bg-[white] rounded-full flex justify-center items-center">
          <strong>20%</strong>
        </div>
      </div>
    </div>
  );
};

export default SidebarProgressBar;
