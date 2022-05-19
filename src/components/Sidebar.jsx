import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Sidebar = () => {
  const isClicked = useSelector((state) => state.sidebar.isClicked);
  const email = useSelector((state) => state.user.email);
  return (
    <div
      className={`w-[240px] p-5 fixed top-0 right-0 z-40 h-[100vh] bg-white transition-all duration-200 ease-in-out flex flex-col ${
        isClicked ? "translate-x-0" : "translate-x-[100%]"
      }`}>
      <strong className="text-center block mb-10">{email} 님</strong>

      <div className="flex flex-col justify-center items-center mb-10">
        <h2>일정 진행률</h2>
        <div className="w-[180px] h-[180px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
          <div className="w-[150px] h-[150px] bg-[white] rounded-full flex justify-center items-center">
            <strong>20%</strong>
          </div>
        </div>
      </div>

      <footer className="flex justify-around items-center">
        <button
          type="button"
          className="p-2 bg-[#97BBFF] text-white rounded-lg">
          <strong>초기화</strong>
        </button>
        <button
          type="button"
          className="p-2 bg-[#97BBFF] text-white rounded-lg">
          <strong>로그아웃</strong>
        </button>
      </footer>
    </div>
    // active 시 translate-x-0,
  );
};

export default Sidebar;
