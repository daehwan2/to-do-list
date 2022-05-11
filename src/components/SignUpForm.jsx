import React, { useState } from "react";
import { authService } from "../fbase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUpForm = ({ setMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const modeConvertToLogin = () => {
    setMode("login");
  };
  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };
  const password2OnChange = (e) => {
    setPassword2(e.target.value);
  };
  const onSignUpSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해주세요");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    await createUserWithEmailAndPassword(authService, email, password)
      .then((data) => console.log(data))
      .catch((err) => {
        alert("회원가입에 실패했습니다.");
        setEmail("");
        setPassword("");
        setPassword2("");
      });
  };
  return (
    <form className="flex flex-col items-center" onSubmit={onSignUpSubmit}>
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
      <input
        type="password"
        placeholder="비밀번호 확인"
        className="w-[280px] mb-4 p-1"
        onChange={password2OnChange}
        value={password2}
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
