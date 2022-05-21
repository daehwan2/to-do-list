import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { dbService, storageService } from "../fbase";

const ToDoListContent = () => {
  const contentList = useSelector((state) => state.content);
  const email = useSelector((state) => state.user.email);
  const onCheck = async (e, id) => {
    console.log(e.target.checked);
    const targetItemRef = doc(dbService, email, id);
    await updateDoc(targetItemRef, {
      check: e.target.checked,
    });
  };
  const onDeleteButton = async (e, id, img) => {
    await deleteDoc(doc(dbService, email, id));
    if (img !== "") await deleteObject(ref(storageService, img));
  };
  return (
    <ol className="w-[100%] h-[100%] pt-[40px] pb-[45px] px-3 flex flex-col-reverse overflow-y-auto">
      {Object.keys(contentList)
        .map((i) => contentList[i])
        .map((item, i) => (
          <li key={i} className="bg-white mb-2 p-1 rounded-[4px]">
            {item.image !== "" ? (
              <img
                src={item.image}
                alt=""
                className="w-[100%] h-[250px] object-contain"
              />
            ) : (
              <></>
            )}

            <div className="flex items-center justify-start ">
              <input
                type="checkbox"
                className="mr-1 shrink-0"
                name=""
                id=""
                onChange={(e) => onCheck(e, contentList[i].id)}
                checked={contentList[i].check}
              />

              <div className="grow">{item.text}</div>
              <button
                type="button"
                className="shrink-0"
                onClick={(e) =>
                  onDeleteButton(e, contentList[i].id, contentList[i].image)
                }>
                삭제
              </button>
            </div>
          </li>
        ))}
    </ol>
  );
};

export default ToDoListContent;
