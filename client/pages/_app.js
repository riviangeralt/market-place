import "../styles/globals.css";
import ResponsiveAppBar from "../components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Router from "next/router";
import Container from "@mui/material/Container";
import NextNProgress from "nextjs-progressbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00a3be",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Market Place - A place where you find codes!</title>
        <meta name="description" content="A place where you find codes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress
        color="#DB2777"
        // startPosition={0.3}
        // stopDelayMs={200}
        // height={3}
        // showOnShallow={true}
      />
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <div style={{ marginTop: 100 }}>
          <Component {...pageProps} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
