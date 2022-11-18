import Navbar from "../Components/Navbar";
import {
  Flex,
  useColorModeValue,
  VStack,
  Button,
  Text,
  Select,
  FormControl,
  Box,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Sudah = () => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [hasil, setHasil] = useState();

  interface person {
    id: number;
    name: string;
    job: string;
  }

  const onSubmit = async (data: any) => {
    try {
      setIsButtonLoading(true);
      const formData = new FormData();
      formData.append("name", data.name);
      console.log(data);
      setHasil(data.name);
      setIsButtonLoading(false);
    } catch (err: any) {
      setIsButtonLoading(false);
      console.log(err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<person>();

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
        <VStack justifyContent={"center"} alignItems={"center"} spacing={5}>
          <Text>Apa hasil tes kepribadian kamu?</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Select
                {...register("name", {
                  required: "Kepribadian harap dipilih",
                })}
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
              {errors.name !== undefined && (
                <Text textColor={"red"}>{errors.name.message}</Text>
              )}
            </Box>
            <Flex p={5} justifyContent={"center"} alignItems={"center"}>
              {isButtonLoading === true ? (
                <Button isLoading w={100} borderRadius={"999px"} type="submit">
                  SUBMIT
                </Button>
              ) : (
                <Button w={100} borderRadius={"999px"} type="submit">
                  SUBMIT
                </Button>
              )}
            </Flex>
          </form>
          <Text>{hasil}</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Sudah;
