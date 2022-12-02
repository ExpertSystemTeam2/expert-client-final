import {
  Flex,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <Flex
        h={"90vh"}
        bgGradient={useColorModeValue(
          "linear(to-b, blue.500, purple.500)",
          "gray.900"
        )}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack
          w={800}
          h={500}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={10}
        >
          <Text
            fontFamily={"Esteban"}
            fontSize={[30, 30, 30, 50]}
            fontWeight={"extrabold"}
          >
            <Typewriter
              options={{
                strings: [
                  "Hello There!",
                  "Selamat Datang!",
                  "Willkommen!",
                  "Bienvenue!",
                  "Bienvenidas!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
          <Text fontFamily={"Rubik"} fontWeight={"bold"}>
            Apakah anda sudah pernah tes kepribadian?
          </Text>
          <HStack spacing={10}>
            <Link href="./pages/Sudah">
              <motion.div whileHover={{ scale: 1.2 }}>
                <VStack
                  justifyContent={"center"}
                  alignItems={"center"}
                  h={200}
                  w={150}
                  color={"white"}
                  bgColor={"green"}
                  borderRadius={25}
                  boxShadow={"2xl"}
                  spacing={5}
                >
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"full"}
                    w={10}
                    h={10}
                  >
                    <Icon as={CheckIcon} />
                  </Flex>
                  <Text fontFamily={"Rubik"}>Sudah</Text>
                </VStack>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.2 }}>
              <VStack
                justifyContent={"center"}
                alignItems={"center"}
                h={200}
                w={150}
                color={"white"}
                bgColor={"red"}
                borderRadius={25}
                boxShadow={"2xl"}
                spacing={5}
              >
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"full"}
                  w={10}
                  h={10}
                >
                  <Icon as={CloseIcon} />
                </Flex>
                <Text fontFamily={"Rubik"}>Belum</Text>
              </VStack>
            </motion.div>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
}
