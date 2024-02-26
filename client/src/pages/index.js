import React from "react";
import dynamic from "next/dynamic";
import CustomSkeletonLoader from "@/general/CustomSkeletonLoader";

const Home = dynamic(() => import("@/components/Home"), {
  ssr: false,
  loading: () => (
    <CustomSkeletonLoader
      width={345}
      height={280}
      numSkeletons={12}
      gridTemplateColumnsNum={4}
      margin={"110px 0 0 0"}
    />
  ),
});

const Index = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default Index;
