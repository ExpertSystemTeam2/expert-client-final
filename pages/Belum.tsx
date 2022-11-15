import {
  Flex,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Link from "next/link";

interface question {
  idx: number;
  id: string;
  quest: string;
}

const IntroEx = (props: any) => {
  const Data: question[] = [
    {
      idx: 1,
      id: "p1",
      quest: "Saya kurang mampu mengekspresikan diri sendiri.",
    },
    {
      idx: 2,
      id: "p2",
      quest:
        "Saya adalah orang yang cenderung tertutup terhadap orang-orang baru.",
    },
    {
      idx: 3,
      id: "p5",
      quest:
        "Saya lebih suka berkomunikasi secara tidak langsung, misalnya melalui telepon, surat, atau sosial media.",
    },
    {
      idx: 4,
      id: "p4",
      quest:
        "Saya akan memiliki inisiatif hanya ketika ada hal-hal mendesak atau hal yang menyangkut kepentingan sendiri.",
    },
    {
      idx: 5,
      id: "p3",
      quest:
        "Bertemu dengan orang lain dan mengikuti aktivitas sosial melelahkan.",
    },
  ];
  return (
    <Flex
      bgGradient={useColorModeValue(
        "linear(to-b, blue.500, purple.500)",
        "gray.900"
      )}
      flexDirection={"column"}
      minH={"100vh"}
    >
      <Flex justifyContent={"center"} alignItems={"center"} p={5}>
        <Text fontSize={30} fontFamily={"Esteban"} fontWeight={"bold"}>
          Introvert / Extrovert
        </Text>
      </Flex>
      <Flex flexDirection={"column"} w={"100%"} fontFamily={"Rubik"}>
        {Data.map((i: any) => (
          <RadioGroup key={i.idx} px={10} py={15}>
            <Stack>
              <Text>
                {i.idx}. {i.quest}
              </Text>
              <Radio value="1">Sangat tidak sesuai</Radio>
              <Radio value="2">Tidak sesuai</Radio>
              <Radio value="3">Ragu-ragu</Radio>
              <Radio value="4">Sesuai</Radio>
              <Radio value="5">Sangat sesuai</Radio>
            </Stack>
          </RadioGroup>
        ))}
      </Flex>
      <Flex justifyContent={"center"} p={10}>
        <Button w={100} onClick={props.senSing}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

const Sensing = (props: any) => {
  const Sensi: question[] = [
    {
      idx: 1,
      id: "p1",
      quest:
        "Saya adalah tipe orang yang lebih percaya terhadap pengalaman diri sendiri dibanding imajinasi dan perenungan.",
    },
    {
      idx: 2,
      id: "p2",
      quest:
        "Saya lebih memilih fakta dibanding ide-ide yang masih abstrak / imajinatif.",
    },
    {
      idx: 3,
      id: "p5",
      quest: "Saya kurang menyukai tantangan baru.",
    },
    {
      idx: 4,
      id: "p3",
      quest:
        "Saya cenderung berfokus pada masalah yang sedang terjadi dibanding solusi untuk masalah yang akan datang.",
    },
    {
      idx: 5,
      id: "p4",
      quest:
        "Saya lebih mampu mengamati dan mengingat detail kecil ketimbang pola / gambaran besar.",
    },
  ];
  return (
    <>
      <Flex
        bgGradient={useColorModeValue(
          "linear(to-b, blue.500, purple.500)",
          "gray.900"
        )}
        flexDirection={"column"}
        minH={"100vh"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} p={5}>
          <Text fontSize={30} fontFamily={"Esteban"} fontWeight={"bold"}>
            Sensing / Intuition
          </Text>
        </Flex>
        <Flex flexDirection={"column"} w={"100%"} fontFamily={"Rubik"}>
          {Sensi.map((i: any) => (
            <RadioGroup key={i.idx} px={10} py={15}>
              <Stack>
                <Text>
                  {i.idx}. {i.quest}
                </Text>
                <Radio value="1">Sangat tidak sesuai</Radio>
                <Radio value="2">Tidak sesuai</Radio>
                <Radio value="3">Ragu-ragu</Radio>
                <Radio value="4">Sesuai</Radio>
                <Radio value="5">Sangat sesuai</Radio>
              </Stack>
            </RadioGroup>
          ))}
        </Flex>
        <Flex justifyContent={"center"} p={10}>
          <Button w={100} onClick={props.Thinking}>
            Next
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const Thinking = (props: any) => {
  const TF: question[] = [
    {
      idx: 1,
      id: "p1",
      quest: "Saya adalah orang yang sangat objektif dan tidak subjektif.",
    },
    {
      idx: 2,
      id: "p2",
      quest:
        "Mengambil keputusan harus berdasarkan logika dan aturan tanpa memperdulikan perasaan orang lain.",
    },
    {
      idx: 3,
      id: "p3",
      quest:
        "Saya lebih menghargai seseorang yang memiliki skill daripada perilaku baiknya.",
    },
    {
      idx: 4,
      id: "p4",
      quest:
        "Saya harus menegakan standar yang tepat walaupun terkadang dapat melukai perasaan manusia.",
    },
    {
      idx: 5,
      id: "p5",
      quest:
        "Saya harus menegakan standar yang tepat walaupun terkadang dapat melukai perasaan manusia.",
    },
  ];
  return (
    <>
      <Flex
        bgGradient={useColorModeValue(
          "linear(to-b, blue.500, purple.500)",
          "gray.900"
        )}
        flexDirection={"column"}
        minH={"100vh"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} p={5}>
          <Text fontSize={30} fontFamily={"Esteban"} fontWeight={"bold"}>
            Thinking / Feeling
          </Text>
        </Flex>
        <Flex flexDirection={"column"} w={"100%"} fontFamily={"Rubik"}>
          {TF.map((i: any) => (
            <RadioGroup key={i.idx} px={10} py={15}>
              <Stack>
                <Text>
                  {i.idx}. {i.quest}
                </Text>
                <Radio value="1">Sangat tidak sesuai</Radio>
                <Radio value="2">Tidak sesuai</Radio>
                <Radio value="3">Ragu-ragu</Radio>
                <Radio value="4">Sesuai</Radio>
                <Radio value="5">Sangat sesuai</Radio>
              </Stack>
            </RadioGroup>
          ))}
        </Flex>
        <Flex justifyContent={"center"} p={10}>
          <Button w={100} onClick={props.perJud}>
            Next
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const PerJud = (props: any) => {
  const PJ: question[] = [
    {
      idx: 1,
      id: "p1",
      quest:
        "Saya memiliki jadwal yang fleksibel dan deadline yang tidak jelas.",
    },
    {
      idx: 2,
      id: "p2",
      quest: "Saya cenderung berorientasi pada proses ketimbang hasil.",
    },
    {
      idx: 3,
      id: "p3",
      quest:
        "Pendirian yang saya miliki dapat berubah menyesuaikan dengan keadaan.",
    },
    {
      idx: 4,
      id: "p5",
      quest:
        "Situasi mendesak mampu memunculkan potensi dan tidak menjadi tekanan.",
    },
    {
      idx: 5,
      id: "p4",
      quest: "Saya bertindak berdasarkan situasi ketimbang rencana.",
    },
  ];
  return (
    <>
      <Flex
        bgGradient={useColorModeValue(
          "linear(to-b, blue.500, purple.500)",
          "gray.900"
        )}
        flexDirection={"column"}
        minH={"100vh"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} p={5}>
          <Text fontSize={30} fontFamily={"Esteban"} fontWeight={"bold"}>
            Perceiving / Judging
          </Text>
        </Flex>
        <Flex flexDirection={"column"} w={"100%"} fontFamily={"Rubik"}>
          {PJ.map((i: any) => (
            <RadioGroup key={i.idx} px={10} py={15}>
              <Stack>
                <Text>
                  {i.idx}. {i.quest}
                </Text>
                <Radio value="1">Sangat tidak sesuai</Radio>
                <Radio value="2">Tidak sesuai</Radio>
                <Radio value="3">Ragu-ragu</Radio>
                <Radio value="4">Sesuai</Radio>
                <Radio value="5">Sangat sesuai</Radio>
              </Stack>
            </RadioGroup>
          ))}
        </Flex>
        <Flex justifyContent={"center"} p={10}>
          <Button w={150} onClick={props.Result}>
            Show Result
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const Result = () => {
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
      <Flex
        bgGradient={useColorModeValue(
          "linear(to-b, blue.500, purple.500)",
          "gray.900"
        )}
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Text>Your Result Is</Text>
          <Text>ENFJ</Text>
          <Text>Gambar disini</Text>
          <Text>Pekerjaan yang cocok untukmu</Text>
          <Text>List kerjaan</Text>
          <Link href={"/"}>
            <Button letterSpacing={2} borderRadius={"full"}>
              HOME
            </Button>
          </Link>
        </VStack>
      </Flex>
    </>
  );
};

const Belum = () => {
  const [state, setState] = useState("IntroEx");
  return (
    <>
      <Navbar />
      {state === "IntroEx" && <IntroEx senSing={() => setState("Sensing")} />}
      {state === "Sensing" && <Sensing Thinking={() => setState("Thinking")} />}
      {state === "Thinking" && <Thinking perJud={() => setState("perJud")} />}
      {state === "perJud" && <PerJud Result={() => setState("Result")} />}
      {state === "Result" && <Result />}
    </>
  );
};

export default Belum;
