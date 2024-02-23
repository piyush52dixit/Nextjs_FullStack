import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [listOFPosts, setListOFPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/posts").then((response) => {
      setListOFPosts(response.data);
    });
  }, []);

  if (listOFPosts.length === 0) {
    return <p>Loading...</p>;
  }
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
    <div
      style={{
        display: "grid",
      }}
    >
      <div
        style={{
          display: "grid",
          justifySelf: "center",
          alignSelf: "center",
          gridTemplateColumns: "repeat(4, 345px)",
          gap: "20px",
          margin: "50px 0 0 0",
        }}
        className="cardContainer"
      >
        {listOFPosts.map((post) => {
          return (
            <>
              <div>
                <Card
                  key={post.id}
                  sx={{ maxWidth: 345, maxHeight: 350, minHeight: 300 }}
                  style={{
                    background:
                      "linear-gradient(to top left, #dfe9f3 0%, white 100%)",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        {post.userName.slice(0, 1).toUpperCase()}
                      </Avatar>
                    }
                    title={post.userName}
                    subheader={formatCreatedAt(post.createdAt)}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      style={{
                        fontWeight: "bold",
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
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
