import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { Rubik } from "next/font/google";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { API_BASE_URL } from "@/components/SingleExpandedPost";
import { Avatar, Card } from "@mui/material";
import { blue } from "@mui/material/colors";

const customFont = Rubik({ subsets: ["cyrillic"] });

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    userName: "",
    password: "",
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

    if (formData.userName.trim() === "") {
      errors.userName = "Username is required";
    } else if (formData.userName.includes(" ")) {
      errors.userName = "Username should not have spaces";
    }

    if (formData.password.trim() === "") {
      errors.password = "Password is required";
    } else if (formData.password.includes(" ")) {
      errors.password = "Password should not have spaces";
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
      const response = await axios.post(`${API_BASE_URL}/auth/login`, formData);

      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        router.push("/");
      }
    } catch (error) {
      console.error("Error Onboarding User:", error.response.data.error);
    } finally {
      setLoading(false);
    }
    console.log(formData);

    setFormData({ userName: "", password: "" });
  };

  return (
    <>
      <div style={customFont.style}>
        {loading && (
          <LinearProgress style={{ position: "fixed", width: "100%" }} />
        )}
        <Card
          sx={{ width: 500, height: 450 }}
          style={{ margin: "50px auto", paddingTop: "20px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
              <LockOutlinedIcon />
            </Avatar>

            <h1 style={{ fontWeight: "400" }}>Welcome Back !</h1>
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
                label="Username"
                variant="outlined"
                margin="normal"
                sx={{ width: 350 }}
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                error={Boolean(validationErrors.userName)}
                helperText={validationErrors.userName}
              />

              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                sx={{ width: 350 }}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                error={Boolean(validationErrors.password)}
                helperText={validationErrors.password}
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
                {loading ? <CircularProgress /> : "login"}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Login;
