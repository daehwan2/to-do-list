import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SidebarProgressBar from "./SidebarProgressBar";
import { signOut } from "firebase/auth";
import { authService } from "../fbase";
const Sidebar = () => {
  const isClicked = useSelector((state) => state.sidebar.isClicked);
  const email = useSelector((state) => state.user.email);
  const onLogout = () => {
    signOut(authService);
  };
  return (
    <div
      className={`w-[240px] p-5 fixed top-0 right-0 z-40 h-[100vh] bg-white transition-all duration-200 ease-in-out flex flex-col ${
        isClicked ? "translate-x-0" : "translate-x-[100%]"
      }`}>
      <strong className="text-center block mb-10">{email} 님</strong>

      <SidebarProgressBar />

      <footer className="flex justify-around items-center">
        <button
          type="button"
          className="p-2 bg-[#97BBFF] text-white rounded-lg">
          <strong>초기화</strong>
        </button>
        <button
          type="button"
          className="p-2 bg-[#97BBFF] text-white rounded-lg"
          onClick={onLogout}>
          <strong>로그아웃</strong>
        </button>
      </footer>
    </div>
    // active 시 translate-x-0,
  );
};

export default Sidebar;
