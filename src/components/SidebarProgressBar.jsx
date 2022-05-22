import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Circle } from "rc-progress";
const SidebarProgressBar = () => {
  const contentObjects = useSelector((state) => state.content);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    calculateProgress();
    console.log(contentObjects);
  }, [contentObjects]);

  const calculateProgress = () => {
    const contentList = Object.keys(contentObjects).map(
      (i) => contentObjects[i]
    );
    const length = contentList.length;
    console.log("ll:", contentList.length);
    let successCount = 0;
    contentList.forEach((item) => {
      if (item.check) {
        successCount++;
      }
    });
    console.log("성공:", successCount);
    setPercent(((successCount / length) * 100).toFixed(2));
    console.log(percent);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h2>일정 진행률</h2>
      <div className="relative w-[200px] h-[200px]">
        <Circle percent={percent} strokeWidth="8" strokeColor="skyblue" />
        <strong className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {percent}%
        </strong>
      </div>
    </div>
  );
};

export default SidebarProgressBar;
