import CustomSkeletonLoader from "@/general/CustomSkeletonLoader";
import dynamic from "next/dynamic";
import React from "react";

const CreatePost = dynamic(() => import("@/components/CreatePost"), {
  ssr: false,
  loading: () => (
    <CustomSkeletonLoader
      width={500}
      height={400}
      numSkeletons={1}
      gridTemplateColumnsNum={1}
      margin={"90px 0 0 -140px"}
    />
  ),
});

const PostCreate = () => {
  return (
    <>
      <CreatePost />
    </>
  );
};

export default PostCreate;
