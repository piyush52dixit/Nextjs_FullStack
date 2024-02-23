import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Rubik } from "next/font/google";

const customFont = Rubik({ subsets: ["cyrillic"] });

const CreatePost = () => {
  return (
    <div style={customFont.style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "500" }}>Create Your Post </h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ width: 500 }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            margin="normal"
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              margin: "20px 0 0 0",
              width: "50%",
              background:
                "linear-gradient(to top right, #0a2351 0%, #13274F 100%)",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
