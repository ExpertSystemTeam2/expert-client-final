import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Spacer,
  useColorMode,
  useColorModeValue,
  Text,
  HStack,
  Box,
  IconButton,
  Stack,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("blue.700", "gray.900")} px={4}>
        <Flex h={"10vh"} alignItems={"center"} justifyContent={"space-between"}>
          <Box mx={5}>
            <Link href="/">
              <Text
                fontFamily={"Bebas Neue"}
                fontSize={[14, 20, 20, 24]}
                color={"white"}
              >
                Job Matcher
              </Text>
            </Link>
          </Box>
          <Flex alignItems={"center"}>
            <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
