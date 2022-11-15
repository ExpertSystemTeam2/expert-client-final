import Head from "next/head";

//importing chakra ui components
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Layout = ({ children }: any) => {
  return (
    <Box>
      <Head>
        <title>Job Matcher</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas Neue:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap&family=Esteban:wght@300;400&display=swap&family=Dancing Script:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300"
          rel="stylesheet"
        />
      </Head>
      <Box>{children}</Box>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(Layout), {
  ssr: false,
});
