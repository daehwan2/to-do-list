import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Home = () => {
  const [mode, setMode] = useState("login");
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#B7C9EB] text-[#3F4756]">
      <div>
        <h1 className="text-center text-[50px] font-bold mb-[50px]">
          ToDoList
        </h1>

        {mode === "login" ? (
          <LoginForm setMode={setMode} />
        ) : (
          <SignUpForm setMode={setMode} />
        )}

        <footer className="mt-5">
          <p className="text-center">
            MadeBy{" "}
            <a
              href="https://sulfuric-wisteria-94a.notion.site/e2b01d78959049fe9efcd6bd04ca7191"
              className="font-bold text-[#1D324C] transition duration-200 ease-in-out hover:text-[blue] active:text-[blue]">
              daehwan2
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
