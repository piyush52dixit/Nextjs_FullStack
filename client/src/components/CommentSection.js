import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  ListItemButton,
  ListItemIcon,
  TextField,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DDMonthNameYYTime from "@/general/DDMonthNameYYTime";
import InboxIcon from "@mui/icons-material/Inbox";

import { blue } from "@mui/material/colors";

const style = {
  py: 0,
  my: 3,
  width: "100%",
  maxWidth: 360,
  minHeight: 100,
  minWidth: 700,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.inherit",
};

const styledList = {
  minHeight: 60,
};

const CommentSection = ({
  comment,
  newComment,
  addComment,
  setNewComment,
  error,
}) => {
  return (
    <>
      <div
        style={{
          color: "#495057",
          maxHeight: "400px",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <p style={{ marginBottom: "8px" }}>
          {comment && comment.length} Comments
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <TextField
            error={error}
            label={`${
              error ? "comment can't be empty" : "Add your Comments..."
            }`}
            variant="standard"
            sx={{ m: 0, width: "50ch" }}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
            value={newComment}
          />
          <Button
            style={{ textTransform: "lowercase", color: "#495057" }}
            onClick={() => addComment()}
          >
            comment
          </Button>
        </div>
        <List sx={style}>
          {comment.map((cmt, index) => {
            return (
              <>
                <ListItem key={index} sx={styledList}>
                  <ListItemIcon>
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                      {cmt.userName?.slice(0, 1).toUpperCase()}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    secondary={cmt.userName}
                    primary={`${cmt.commentBody}`}
                  />
                </ListItem>
                <Divider component="li" />
              </>
            );
          })}
        </List>
      </div>
    </>
  );
};

export default CommentSection;
