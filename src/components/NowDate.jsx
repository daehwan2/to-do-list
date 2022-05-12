import React, { useEffect, useState } from "react";

const NowDate = () => {
  const [currentDate, setCurrentDate] = useState();
  const getCurrentDate = () => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일
    setCurrentDate(`${year}-${month}-${date}`);
  };
  useEffect(() => {
    getCurrentDate();
  }, []);

  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      {currentDate}
    </div>
  );
};

export default NowDate;
