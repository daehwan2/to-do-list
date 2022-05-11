import React from "react";

const SignUpForm = ({ setMode }) => {
  const modeConvertToLogin = () => {
    setMode("login");
  };
  return (
    <form className="flex flex-col items-center">
      <input type="email" placeholder="이메일" className="w-[280px] mb-4 p-1" />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-[280px] mb-4 p-1"
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        className="w-[280px] mb-4 p-1"
      />
      <button
        type="submit"
        className="w-[100%] border-[1px] border-black mb-4 rounded-[4px] py-[5px] bg-[#3F4756] text-[white] transition duration-200 ease-in-out hover:opacity-80 active:opacity-80">
        회원가입
      </button>

      <button
        type="button"
        onClick={modeConvertToLogin}
        className="text-[#3F4756] font-bold transition duration-200 ease-in-out hover:text-[blue]">
        로그인
      </button>
    </form>
  );
};

export default SignUpForm;
