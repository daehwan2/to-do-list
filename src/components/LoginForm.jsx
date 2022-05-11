import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = ({ setMode }) => {
  const modeConverToSignUp = () => {
    setMode("signup");
  };
  return (
    <form className="flex flex-col items-center">
      <input type="email" placeholder="이메일" className="w-[280px] mb-4 p-1" />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-[280px] mb-4 p-1"
      />
      <button
        type="submit"
        className="w-[100%] border-[1px] border-black mb-4 rounded-[4px] py-[5px] bg-[#3F4756] text-[white] transition duration-200 ease-in-out hover:opacity-80 active:opacity-80">
        로그인
      </button>

      <button
        type="button"
        className="flex justify-center items-center border-black border-[1px] rounded-[4px] p-3 mb-2 drop-shadow-lg	bg-white transition duration-200 ease-in-out hover:opacity-80 active:opacity-80">
        <FcGoogle className="text-[50px]" />
      </button>

      <button
        type="button"
        onClick={modeConverToSignUp}
        className="text-[#3F4756] font-bold transition duration-200 ease-in-out hover:text-[blue]">
        회원가입
      </button>
    </form>
  );
};

export default LoginForm;
