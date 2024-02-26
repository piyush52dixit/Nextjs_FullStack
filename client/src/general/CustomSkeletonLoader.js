import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

const CustomSkeletonLoader = (props) => {
  const skeletons = Array.from({ length: props.numSkeletons }, (_, index) => (
    <Skeleton
      key={index}
      sx={{ bgcolor: "#dfe9f3" }}
      variant="rounded"
      width={props.width}
      height={props.height}
    />
  ));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          justifySelf: `${props.justifySelf} || center`,
          alignSelf: `${props.alignSelf} || center`,
          gridTemplateColumns: `repeat(${props.gridTemplateColumnsNum}, 345px)`,
          gap: "20px",
          margin: `${props.margin}`,
        }}
      >
        {skeletons}
      </div>
    </div>
  );
};

export default CustomSkeletonLoader;
