import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { Rubik } from "next/font/google";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const customFont = Rubik({ subsets: ["cyrillic"] });

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    postData: "",
    userName: "",
  });
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    postData: "",
    userName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (formData.title.trim() === "") {
      errors.title = "Title is required";
    }

    if (formData.postData.trim() === "") {
      errors.postData = "Description is required";
    } else if (formData.postData.trim().length < 50) {
      errors.postData = "Description must be 50 words Long";
    }

    if (formData.userName.trim() === "") {
      errors.userName = "Username is required";
    } else if (formData.userName.includes(" ")) {
      errors.userName = "Username should not have spaces";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5555/posts", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }

    setFormData({ title: "", postData: "", userName: "" });
  };

  return (
    <div style={customFont.style}>
      {loading && (
        <LinearProgress style={{ position: "fixed", width: "100%" }} />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "500" }}>Create Your Post !</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ width: 500 }}
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            error={Boolean(validationErrors.title)}
            helperText={validationErrors.title}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            margin="normal"
            name="postData"
            value={formData.postData}
            onChange={handleInputChange}
            error={Boolean(validationErrors.postData)}
            helperText={validationErrors.postData}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            error={Boolean(validationErrors.userName)}
            helperText={validationErrors.userName}
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
            disabled={loading}
          >
            {loading ? <CircularProgress /> : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
