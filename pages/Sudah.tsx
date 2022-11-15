import Navbar from "../Components/Navbar";
import {
  Flex,
  useColorModeValue,
  VStack,
  Button,
  Text,
  Select,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const Sudah = () => {
  interface person {
    id: number;
    name: string;
    job: string;
  }
  const Personalities: person[] = [
    {
      id: 1,
      name: "INTJ",
      job: "",
    },
    {
      id: 2,
      name: "INTP",
      job: "",
    },
    {
      id: 3,
      name: "ENTJ",
      job: "",
    },
    {
      id: 4,
      name: "ENTP",
      job: "",
    },
    {
      id: 5,
      name: "INFJ",
      job: "",
    },
    {
      id: 6,
      name: "INFP",
      job: "",
    },
    {
      id: 7,
      name: "ENFJ",
      job: "",
    },
    {
      id: 8,
      name: "ENFP",
      job: "",
    },
    {
      id: 9,
      name: "ISTJ",
      job: "",
    },
    {
      id: 10,
      name: "ISFJ",
      job: "",
    },
    {
      id: 11,
      name: "ESTJ",
      job: "",
    },
    {
      id: 12,
      name: "ESFJ",
      job: "",
    },
    {
      id: 13,
      name: "ISTP",
      job: "",
    },
    {
      id: 14,
      name: "ISFP",
      job: "",
    },
    {
      id: 15,
      name: "ESTP",
      job: "",
    },
    {
      id: 16,
      name: "ESFP",
      job: "",
    },
  ];
  return (
    <>
      <Navbar />
      <Flex
        h={"90vh"}
        bgGradient={useColorModeValue(
          "linear(to-b, blue.500, purple.500)",
          "gray.900"
        )}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Text>Apa hasil tes kepribadian kamu?</Text>
          <Select
            icon={<TriangleDownIcon />}
            variant={"outline"}
            placeholder={"Kepribadian"}
          >
            {Personalities.map((i: any) => (
              <>
                <option key={i.id} value={i.name}>
                  {i.name}
                </option>
              </>
            ))}
          </Select>
          <Button>Submit</Button>
        </VStack>
      </Flex>
    </>
  );
};

export default Sudah;
