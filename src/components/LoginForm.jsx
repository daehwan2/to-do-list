import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { authService } from "../fbase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const LoginForm = ({ setMode }) => {
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modeConverToSignUp = () => {
    setMode("signup");
  };
  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };
  const onLoginSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해주세요");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    await signInWithEmailAndPassword(authService, email, password)
      .then((data) => console.log(data))
      .catch((err) => {
        alert("로그인에 실패했습니다.");
        setEmail("");
        setPassword("");
      });
  };
  const onGoogleLogin = () => {
    signInWithRedirect(authService, provider);
  };
  return (
    <form className="flex flex-col items-center" onSubmit={onLoginSubmit}>
      <input
        type="email"
        placeholder="이메일"
        className="w-[280px] mb-4 p-1"
        onChange={emailOnChange}
        value={email}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-[280px] mb-4 p-1"
        onChange={passwordOnChange}
        value={password}
      />
      <button
        type="submit"
        className="w-[100%] border-[1px] border-black mb-4 rounded-[4px] py-[5px] bg-[#3F4756] text-[white] transition duration-200 ease-in-out hover:opacity-80 active:opacity-80">
        로그인
      </button>

      <button
        type="button"
        className="flex justify-center items-center border-black border-[1px] rounded-[4px] p-3 mb-2 drop-shadow-lg	bg-white transition duration-200 ease-in-out hover:opacity-80 active:opacity-80"
        onClick={onGoogleLogin}>
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
