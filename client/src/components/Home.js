import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Link from "next/link";
import DDMonthNameYYTime from "@/general/DDMonthNameYYTime";
import { API_BASE_URL } from "./SingleExpandedPost";
import { Rubik } from "next/font/google";

const customFont = Rubik({ subsets: ["cyrillic"] });

const Home = () => {
  const [listOFPosts, setListOFPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        setListOFPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={customFont.style}>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            fontSize: "36px",
            color: "#13274F",
            marginBottom: "50px",
          }}
        >
          Read Articles of your Choice!
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 345px)",
            gap: "20px",
          }}
          className="cardContainer"
        >
          {listOFPosts.map((post) => (
            <Link
              href={`/post/${post.id}`}
              key={post.id}
              passHref
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{ maxWidth: 345, maxHeight: 350, minHeight: 300 }}
                style={{
                  background:
                    "linear-gradient(to top left, #dfe9f3 0%, white 100%)",
                  position: "relative",
                  fontFamily: "inherit",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                      {post.userName?.slice(0, 1).toUpperCase()}
                    </Avatar>
                  }
                  title={post.userName}
                  subheader={<DDMonthNameYYTime createdAt={post.createdAt} />}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#0a2351",
                    }}
                  >
                    {post.title}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.postData}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
