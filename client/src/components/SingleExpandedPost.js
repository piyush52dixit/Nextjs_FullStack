import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, CardContent, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import CommentSection from "./CommentSection";
import ImageSection from "./ImageSection";
import DDMonthNameYYTime from "@/general/DDMonthNameYYTime";
import img from "../../public/work.svg";
import styles from "./SingleExpandedPost.module.css"; // Import CSS Modules
import { Rubik } from "next/font/google";

const customFont = Rubik({ subsets: ["cyrillic"] });

export const API_BASE_URL = "http://localhost:5555";

const SingleExpandedPost = ({ id }) => {
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts/byId/${id}`);
        if (response?.data) {
          setData(response.data);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };

    const fetchCommentData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/comments/${id}`);
        if (response?.data) {
          setComment(response.data);
        } else {
          console.log("Error");
        }
        console.log("🚀 ~ fetchCommentData ~ response:", response.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };

    fetchData();
    fetchCommentData();
  }, [id]);

  const addComment = () => {
    if (!newComment.trim()) {
      setError(true);
      return; // Exit the function if the comment is empty
    }
    axios
      .post(`${API_BASE_URL}/comments`, {
        commentBody: newComment,
        PostId: id,
      })
      .then((response) => {
        const newCommentToAdd = { commentBody: newComment };
        setComment([...comment, newCommentToAdd]);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
        setError(true);
      });

    setNewComment("");
    setError(false);
  };

  return (
    <div style={customFont.style}>
      <div className={styles.flexContainer}>
        <div className={styles.postContent}>
          <CardContent>
            <Typography
              variant="body2"
              color="text.primary"
              className={styles.title}
            >
              {data?.title}
            </Typography>
          </CardContent>
          <div className={styles.userInfo}>
            <Avatar
              sx={{
                bgcolor: blue[500],
                width: 70,
                height: 70,
                fontSize: "36px",
              }}
              aria-label="recipe"
            >
              {data?.userName?.slice(0, 1).toUpperCase()}
            </Avatar>
            <div className={styles.userInfoDetails}>
              <div className={styles.userName}>{data?.userName}</div>
              <div className={styles.date}>
                <DDMonthNameYYTime createdAt={data?.createdAt} />
              </div>
            </div>
          </div>
          <hr />
          <CardContent>
            <Typography
              variant="body2"
              color="#1864ab"
              className={styles.postData}
            >
              {data?.postData}
            </Typography>
          </CardContent>
          <div className={styles.commentSection}>
            <CommentSection
              {...{ comment, newComment, addComment, setNewComment, error }}
            />
          </div>
        </div>
        <ImageSection img={img} />
      </div>
    </div>
  );
};

export default SingleExpandedPost;
