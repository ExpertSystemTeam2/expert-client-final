import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../Components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
}
