import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div
      style={{
        background: "linear-gradient(to top, #dfe9f3 0%, white 100%)",
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
      <AppBar
        position="static"
        style={{
          background: "linear-gradient(to top right, #0a2351 0%, #13274F 100%)",
          zIndex: "999",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              NextJs Full Stack
            </Link>
          </Typography>
          <Link href="/">
            <Button style={{ color: "#fff" }}>HomePage</Button>
          </Link>
          <Link href="/create-post">
            <Button style={{ color: "#fff" }}>Create Post</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Component {...pageProps} />
    </div>
  );
}
