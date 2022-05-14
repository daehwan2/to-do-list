import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dbService } from "../fbase";
import { SetContent } from "../_actions/content_action";
import ToDoListContent from "./ToDoListContent";
import ToDoListHeader from "./ToDoListHeader";
import ToDoListInputForm from "./ToDoListInputForm";
const ToDoListView = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(dbService, email), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (doc) => {
      dispatch(SetContent(doc.docs.map((d) => d.data())));
    });
  }, []);
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#B7C9EB] text-[#3F4756] relative">
      <ToDoListHeader />
      <ToDoListContent />
      <ToDoListInputForm />
    </div>
  );
};

export default ToDoListView;
