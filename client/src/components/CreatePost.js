import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { Rubik } from "next/font/google";

const customFont = Rubik({ subsets: ["cyrillic"] });

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    description: "",
    username: "",
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

    if (formData.description.trim() === "") {
      errors.description = "Description is required";
    } else if (formData.description.trim().length < 50) {
      errors.description = "Description must be 50 words Long";
    }

    if (formData.username.trim() === "") {
      errors.username = "Username is required";
    } else if (formData.username.includes(" ")) {
      errors.username = "Username should not have spaces";
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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }

    setFormData({ title: "", description: "", username: "" });
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
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            error={Boolean(validationErrors.description)}
            helperText={validationErrors.description}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            error={Boolean(validationErrors.username)}
            helperText={validationErrors.username}
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
