import Navbar from "../Components/Navbar";
import {
  Flex,
  useColorModeValue,
  VStack,
  Button,
  Text,
  Select,
  Box,
  HStack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Sudah = () => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [hasil, setHasil] = useState();

  interface person {
    id: number;
    name: string;
    job: any;
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

  const Personalities = [
    {
      id: 1,
      name: "INTJ",
      job: [
        "Manager Proyek",
        "Auditor",
        "Arsitek",
        "Software Developer",
        "Desainer",
        "Animator",
        "Konsultan Bisnis",
        "Teknisi Mesin",
        "Teknisi Sipil",
      ],
    },
    {
      id: 2,
      name: "INTP",
      job: [
        "Peneliti",
        "Dosen",
        "Dokter",
        "Astronomi",
        "Ahli Ekonomi",
        "Pengamat Politik",
        "Penulis",
        "Software Developer",
        "Aktuaria",
        "Arkeolog",
        "System Analyst",
      ],
    },
    {
      id: 3,
      name: "ENTJ",
      job: [
        "manager finansial",
        "advokat",
        "manager bisnis",
        "wirausaha",
        "purchasing",
        "sales",
        "teknisi sipil",
        "akuntan",
        "hakim",
      ],
    },
    {
      id: 4,
      name: "ENTP",
      job: [
        "politikus",
        "sales",
        "aktor",
        "musisi",
        "reporter",
        "sejarahwan",
        "ahli sosial",
        "produser",
        "desainer",
        "advokat",
        "detektif",
      ],
    },
    {
      id: 5,
      name: "INFJ",
      job: [
        "perawat",
        "guru sekolah",
        "psikiatri",
        "pemuka agama",
        "holistik",
        "pekerja sosial",
        "customer service",
        "mediator",
        "penulis",
        "manager HRD",
      ],
    },
    {
      id: 6,
      name: "INFP",
      job: [
        "film editor",
        "fotografer",
        "chiropractor",
        "psikolog",
        "HR specialist",
        "dokter anak-anak",
        "kurator",
        "pustakawan",
        "psikiatri",
        "editor film",
      ],
    },
    {
      id: 7,
      name: "ENFJ",
      job: [
        "edukator kesehatan",
        "bimbingan konseling",
        "film editor",
        "manager PR",
        "reporter",
        "dosen",
        "guru sekolah",
        "manager marketing",
        "sales",
        "pramugari",
        "trainer",
        "produser",
        "sosiolog",
      ],
    },
    {
      id: 8,
      name: "ENFP",
      job: [
        "aktor",
        "musisi",
        "market analyst",
        "sales",
        "manager marketing",
        "pramugari",
        "penata rambut",
        "sosiolog",
        "pekerja sosial",
        "reporter",
        "penulis",
        "desainer",
        "guru sekolah",
      ],
    },
    {
      id: 9,
      name: "ISTJ",
      job: [
        "akuntan",
        "ahli logistik",
        "manager finasial",
        "purchasing",
        "document administrator",
        "sales",
        "arsitek",
        "ahli agrikultur",
        "teknisi sipil",
        "teknisi mesin",
        "ahli geologi",
        "teknisi kehutanan",
        "operator mesin",
        "atlit",
      ],
    },
    {
      id: 10,
      name: "ISFJ",
      job: [
        "pekerja sosial",
        "ahli agrikultur",
        "forensik",
        "trainer",
        "dokter",
        "perawat",
        "apoteker",
        "dokter anak-anak",
        "guru sekolah",
        "pustakawan",
        "customer service",
        "pembimbing konseling",
        "pemadam kebakaran",
      ],
    },
    {
      id: 11,
      name: "ESTJ",
      job: [
        "manager marketing",
        "sales",
        "credit analyst",
        "staff hotel",
        "petugas militer",
        "polisi",
        "jaksa",
        "koki",
        "hakim",
        "apoteker",
        "dokter gigi",
        "database administrator",
      ],
    },
    {
      id: 12,
      name: "ESFJ",
      job: [
        "guru sekolah",
        "pembimbing konseling",
        "polisi",
        "legal",
        "dokter",
        "perawat",
        "trainer",
        "purchasing",
        "manager HRD",
        "sales",
        "manager bisnis",
        "reporter",
      ],
    },
    {
      id: 13,
      name: "ISTP",
      job: [
        "teknisi mesin",
        "arsitek",
        "teknisi kehutanan",
        "fotografer",
        "security analyst",
        "software developer",
        "software tester",
        "ahli ekonomi",
        "pilot",
        "petugas militer",
        "pemadam kebakaran",
      ],
    },
    {
      id: 14,
      name: "ISFP",
      job: [
        "desainer",
        "koki",
        "teknisi mesin",
        "teknisi perhutanan",
        "perawat",
        "trainer",
        "manager bisnis",
        "apoteker",
        "dokter hewan",
        "ahli botani",
        "polisi",
        "penerjemah",
        "ahli koreografi",
      ],
    },
    {
      id: 15,
      name: "ESTP",
      job: [
        "inspektor bangunan",
        "teknisi mesin",
        "wirausaha",
        "trainer",
        "manager marketing",
        "manager hotel",
        "petugas militer",
        "pilot",
        "pramugari",
        "bartender",
        "manager properti",
        "developer tanah",
      ],
    },
    {
      id: 16,
      name: "ESFP",
      job: [
        "perawat",
        "guru sekolah",
        "pekerja sosial",
        "manager retail",
        "purchasing",
        "sales",
        "pramugari",
        "koki",
        "desainer",
        "aktor",
        "fotografer",
        "polisi",
        "event organizer",
        "staff restoran",
        "ahli koreografi",
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <Flex
        h={"100vh"}
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
          <Text>Job Recommendations That Suit You:</Text>
          {hasil === "INTJ" && <Intj />}
          {hasil === "INTP" && <Intp />}
        </VStack>
      </Flex>
    </>
  );
};

const Intp = () => {
  const intp = [
    { id: 0, job: "Peneliti" },
    { id: 1, job: "System Analyst" },
    { id: 2, job: "Dosen" },
    { id: 3, job: "Dokter" },
    { id: 4, job: "Astronomi" },
    { id: 5, job: "Ahli Ekonomi" },
    { id: 6, job: "Pengamat Politik" },
    { id: 7, job: "Penulis" },
    { id: 8, job: "Software Developer" },
    { id: 9, job: "Aktuaria" },
    { id: 10, job: "Arkeolog" },
  ];

  return (
    <>
      {intp.map((i: any) => {
        return (
          <>
            <UnorderedList>
              <ListItem key={i.id}>{i.job}</ListItem>
            </UnorderedList>
          </>
        );
      })}
    </>
  );
};

const Intj = () => {
  const intj = [
    { id: 0, job: "Manager Proyek" },
    { id: 1, job: "Auditor" },
    { id: 2, job: "Arsitek" },
    { id: 3, job: "Software Developer" },
    { id: 4, job: "Desainer" },
    { id: 5, job: "Animator" },
    { id: 6, job: "Konsultan Bisnis" },
    { id: 7, job: "Penulis" },
    { id: 8, job: "Teknisi Mesin" },
    { id: 9, job: "Teknisi Sipil" },
  ];

  return (
    <>
      {intj.map((i: any) => {
        return (
          <>
            <UnorderedList>
              <ListItem key={i.id}>{i.job}</ListItem>
            </UnorderedList>
          </>
        );
      })}
    </>
  );
};

export default Sudah;
