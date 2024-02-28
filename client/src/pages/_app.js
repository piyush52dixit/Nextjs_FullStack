import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div
      style={{
        background: "linear-gradient(to top, #dfe9f3 0%, white 100%)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Component {...pageProps} />{" "}
    </div>
  );
}
