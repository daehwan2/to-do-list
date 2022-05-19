import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SidebarProgressBar from "./SidebarProgressBar";
import { signOut } from "firebase/auth";
import { authService, dbService } from "../fbase";
import { collection, deleteDoc, doc } from "firebase/firestore";
const Sidebar = () => {
  const isClicked = useSelector((state) => state.sidebar.isClicked);
  const email = useSelector((state) => state.user.email);
  const contentObject = useSelector((state) => state.content);
  const onLogout = () => {
    signOut(authService);
  };
  const onReset = () => {
    const real = global.confirm("모두 지우시겠습니까?");
    if (real) {
      Object.keys(contentObject)
        .map((i) => contentObject[i])
        .map((item) => {
          console.log(item);
          deleteDoc(doc(dbService, email, item.id));
        });
    }
  };
  return (
    <div
      className={`w-[240px] p-5 fixed top-0 right-0 z-40 h-[100vh] bg-white transition-all duration-200 ease-in-out flex flex-col ${
        isClicked ? "translate-x-0" : "translate-x-[100%]"
      }`}>
      <strong className="text-center block mb-10">{email} 님</strong>

      <SidebarProgressBar />

      <footer className="flex justify-around items-center mb-4">
        <button
          type="button"
          className="p-2 bg-[#97BBFF] text-white rounded-lg"
          onClick={onReset}>
          <strong>초기화</strong>
        </button>
        <button
          type="button"
          className="p-2 bg-[#97BBFF] text-white rounded-lg"
          onClick={onLogout}>
          <strong>로그아웃</strong>
        </button>
      </footer>

      <p className="text-center">
        MadeBy{" "}
        <a
          href="https://sulfuric-wisteria-94a.notion.site/e2b01d78959049fe9efcd6bd04ca7191"
          className="font-bold text-[#1D324C] transition duration-200 ease-in-out hover:text-[blue] active:text-[blue]">
          daehwan2
        </a>
      </p>
    </div>
  );
};

export default Sidebar;
