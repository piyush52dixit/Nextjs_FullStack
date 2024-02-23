import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NextJs Full Stack
          </Typography>
          <Button color="inherit">HomePage</Button>
          <Button color="inherit">Create Post</Button>
        </Toolbar>
      </AppBar>

      <Component {...pageProps} />
    </div>
  );
}
