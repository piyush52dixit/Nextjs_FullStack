import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Rubik } from "next/font/google";
import img from "../../public/work.svg";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";

const customFont = Rubik({ subsets: ["cyrillic"] });

const SingleExpandedPost = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5555/posts/byId/${id}`
        );
        if (response) {
          setData(response.data);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };

    fetchData();
  }, [id]);

  const formatCreatedAt = (createdAt) => {
    return new Date(createdAt).toLocaleString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };
  return (
    <>
      <div style={customFont.style}>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            key={data && data.id}
            style={{ width: "100vh", height: "90vh", padding: "20px" }}
          >
            <CardContent>
              <Typography
                variant="body2"
                color="text.primary"
                style={{
                  fontWeight: "600",
                  fontSize: "48px",
                  color: "#0a2351",
                  fontFamily: "inherit",
                }}
              >
                {data && data.title}
              </Typography>
            </CardContent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "10px",
                paddingBottom: "10px",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: blue[500],
                  width: 70,
                  height: 70,
                  fontSize: "36px",
                }}
                aria-label="recipe"
              >
                {data &&
                  data.userName &&
                  data.userName.slice(0, 1).toUpperCase()}
              </Avatar>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <div style={{ fontSize: "30px" }}>{data && data.userName}</div>
                <div style={{ color: "#495057" }}>
                  {" "}
                  {formatCreatedAt(data && data.createdAt)}
                </div>
              </div>
            </div>
            <hr />
            <CardContent>
              <Typography
                variant="body2"
                color="#1864ab"
                fontFamily="inherit"
                fontSize="24px"
                margin=" 20px 0 0 0"
                lineHeight="40px"
                letterSpacing=".3px"
              >
                {data && data.postData}
              </Typography>
            </CardContent>
          </div>
          <div
            style={{
              width: "100vh",
              background: "conic-gradient(from 135deg, #0022AD, #1C0964)",
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
              <br />
              Go Ahead !
              <span>
                <br />
                <Link href="/create-post">
                  <Button
                    style={{ color: "#fff" }}
                    variant="outlined"
                    size="md"
                  >
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
              <span>Or Go Back to All Posts </span>
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
        </div>
      </div>
    </>
  );
};

export default SingleExpandedPost;
