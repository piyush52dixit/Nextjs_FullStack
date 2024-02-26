import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import CustomSkeletonLoader from "@/general/CustomSkeletonLoader";

const SingleExpandedPost = dynamic(
  () => import("../../components/SingleExpandedPost"),
  {
    ssr: false,
    loading: () => (
      <CustomSkeletonLoader
        width={900}
        height={500}
        numSkeletons={1}
        gridTemplateColumnsNum={1}
        margin={"30px 0 0 -1500px"}
        justifySelf={"start"}
        alignSelf={"start"}
      />
    ),
  }
);

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <SingleExpandedPost id={slug} />
    </>
  );
};

export default Post;
