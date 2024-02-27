import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ImageSection = ({ img }) => {
  return (
    <>
      <div
        style={{
          width: "100vh",
          background: "conic-gradient(from 135deg, #0022AD, #13274F)",
        }}
      >
        <Image src={img} alt="Example Image" width={820} height={500} />
        <p
          style={{
            fontSize: "50px",
            fontWeight: "500",
            color: "#fff",
            margin: "0 0 0 50px",
          }}
        >
          Want to Post your Own Article?
          <br />
          Go Ahead !
          <span>
            <br />
            <Link href="/create-post">
              <Button style={{ color: "#fff" }} variant="outlined" size="md">
                Create Post
              </Button>
            </Link>
          </span>
        </p>
        <br />
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#fff",
            margin: "20px 0 0 50px",
          }}
        >
          <span style={{ margin: "0 10px 0 0 " }}>Or, Go Back </span>
          <Link href="/">
            <Button
              style={{ color: "#fff", fontSize: "10px" }}
              variant="outlined"
            >
              All Posts
            </Button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default ImageSection;
