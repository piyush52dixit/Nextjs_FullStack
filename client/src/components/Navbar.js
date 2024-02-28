import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import { Alert, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ClearlocalStorage = () => {
    localStorage.clear();
    router.push("/");
    window.location.reload();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      setIsLoggedIn(accessToken !== null);
    }
  }, []);

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#13274F",
          zIndex: "999",
          height: "70px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              NextJs Full Stack
            </Link>
          </Typography>
          {isLoggedIn ? (
            <div>
              <Avatar
                sx={{ bgcolor: blue[900], padding: "4px" }}
                aria-label="recipe"
              >
                <PersonIcon
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  fontSize="large"
                />
              </Avatar>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link
                  href="/create-post"
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  <MenuItem onClick={handleClose}>Create Post</MenuItem>
                </Link>

                <MenuItem onClick={ClearlocalStorage}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button
                  style={{ color: "#fff", marginRight: "10px" }}
                  variant="outlined"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button style={{ color: "#fff" }} variant="outlined">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
