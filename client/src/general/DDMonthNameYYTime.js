import React from "react";

const DDMonthNameYYTime = ({ createdAt }) => {
  const formattedDate = new Date(createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return <>{formattedDate}</>;
};

export default DDMonthNameYYTime;
