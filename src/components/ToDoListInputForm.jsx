import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { dbService } from "../fbase";
import { useSelector } from "react-redux";

const ToDoListInputForm = () => {
  const email = useSelector((state) => state.user.email);
  const [text, setText] = useState("");

  const textChange = (e) => {
    setText(e.target.value);
  };

  const addListItem = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, email), {
      check: false,
      text,
      createdAt: Date.now(),
    });
    setText("");
  };
  return (
    <form
      className="bg-white flex items-center w-[100%] h-[45px] fixed bottom-0"
      onSubmit={addListItem}>
      <button type="button" className="p-2">
        <BsPlusSquare className="text-[24px]" />
      </button>
      <input
        type="text"
        placeholder="내용 입력"
        className="grow"
        onChange={textChange}
        value={text}
      />
      <button
        type="submit"
        className="border-[#3F4756] border-[2px] rounded-[4px] px-2 mx-2">
        입력
      </button>
    </form>
  );
};

export default ToDoListInputForm;
