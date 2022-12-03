import Navbar from "../Components/Navbar";
import {
  Flex,
  useColorModeValue,
  VStack,
  Button,
  Text,
  Select,
  Box,
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
        "Manager Finansial",
        "Advokat",
        "Manager Bisnis",
        "Wirausaha",
        "Purchasing",
        "Sales",
        "Teknisi Sipil",
        "Akuntan",
        "Hakim",
      ],
    },
    {
      id: 4,
      name: "ENTP",
      job: [
        "Politikus",
        "Sales",
        "Aktor",
        "Musisi",
        "Reporter",
        "Sejarahwan",
        "Ahli Sosial",
        "Produser",
        "Desainer",
        "Advokat",
        "Detektif",
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
          {hasil === "ENTJ" && <Entj />}
          {hasil === "ENTP" && <Entp />}
          {hasil === "INFJ" && <Infj />}
          {hasil === "INFP" && <Infp />}
          {hasil === "ENFJ" && <Enfj />}
          {hasil === "ENFP" && <Enfp />}
          {hasil === "ISTJ" && <Istj />}
          {hasil === "ISFJ" && <Isfj />}
          {hasil === "ESTJ" && <Estj />}
          {hasil === "ESFJ" && <Esfj />}
          {hasil === "ISTP" && <Istp />}
          {hasil === "ISFP" && <Isfp />}
          {hasil === "ESTP" && <Estp />}
          {hasil === "ESFP" && <Esfp />}
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

const Entp = () => {
  const entp = [
    { id: 0, job: "Politikus" },
    { id: 1, job: "Sales" },
    { id: 2, job: "Aktor" },
    { id: 3, job: "Musisi" },
    { id: 4, job: "Reporter" },
    { id: 5, job: "Sejarahwan" },
    { id: 6, job: "Ahli Sosial" },
    { id: 7, job: "Produser" },
    { id: 8, job: "Desainer" },
    { id: 9, job: "Advokat" },
    { id: 10, job: "Detektif" },
  ];
  return (
    <>
      {entp.map((i: any) => {
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

const Entj = () => {
  const entj = [
    { id: 0, job: "Manager Finansial" },
    { id: 1, job: "Auditor" },
    { id: 2, job: "Advokat" },
    { id: 3, job: "Manager Bisnis" },
    { id: 4, job: "Wirausaha" },
    { id: 5, job: "Purchasing" },
    { id: 6, job: "Sales" },
    { id: 7, job: "Akuntan" },
    { id: 8, job: "Hakim" },
    { id: 9, job: "Teknisi Sipil" },
  ];
  return (
    <>
      {entj.map((i: any) => {
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

const Infp = () => {
  const infp = [
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
      {infp.map((i: any) => {
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

const Infj = () => {
  const infj = [
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
      {infj.map((i: any) => {
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

const Enfp = () => {
  const enfp = [
    { id: 0, job: "Politikus" },
    { id: 1, job: "Sales" },
    { id: 2, job: "Aktor" },
    { id: 3, job: "Musisi" },
    { id: 4, job: "Reporter" },
    { id: 5, job: "Sejarahwan" },
    { id: 6, job: "Ahli Sosial" },
    { id: 7, job: "Produser" },
    { id: 8, job: "Desainer" },
    { id: 9, job: "Advokat" },
    { id: 10, job: "Detektif" },
  ];
  return (
    <>
      {enfp.map((i: any) => {
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

const Enfj = () => {
  const enfj = [
    { id: 0, job: "Manager Finansial" },
    { id: 1, job: "Auditor" },
    { id: 2, job: "Advokat" },
    { id: 3, job: "Manager Bisnis" },
    { id: 4, job: "Wirausaha" },
    { id: 5, job: "Purchasing" },
    { id: 6, job: "Sales" },
    { id: 7, job: "Akuntan" },
    { id: 8, job: "Hakim" },
    { id: 9, job: "Teknisi Sipil" },
  ];
  return (
    <>
      {enfj.map((i: any) => {
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

const Istj = () => {
  const istj = [
    { id: 0, job: "Akuntan" },
    { id: 1, job: "Ahli Logistik" },
    { id: 2, job: "Manager Finansial" },
    { id: 3, job: "Purchasing" },
    { id: 4, job: "Document Administrator" },
    { id: 5, job: "Sales" },
    { id: 6, job: "Arsitek" },
    { id: 7, job: "Ahli Agrikultur" },
    { id: 8, job: "Teknisi Mesin" },
    { id: 9, job: "Teknisi Sipil" },
    { id: 10, job: "Ahli Geologi" },
    { id: 11, job: "Operator Mesin" },
    { id: 12, job: "Atlit" },
  ];
  return (
    <>
      {istj.map((i: any) => {
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

const Isfj = () => {
  const isfj = [
    { id: 0, job: "Pekerja Sosial" },
    { id: 1, job: "Ahli Agrikultur" },
    { id: 2, job: "Forensik" },
    { id: 3, job: "Trainer" },
    { id: 4, job: "Dokter" },
    { id: 5, job: "Perawat" },
    { id: 6, job: "Apoteker" },
    { id: 7, job: "Dokter Anak-anak" },
    { id: 8, job: "Guru Sekolah" },
    { id: 9, job: "Pustakawan" },
    { id: 10, job: "Customer Service" },
    { id: 11, job: "Pembimbing Konseling" },
    { id: 12, job: "Pemadam Kebakaran" },
  ];
  return (
    <>
      {isfj.map((i: any) => {
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

const Estj = () => {
  const estj = [
    { id: 0, job: "Manager Marketing" },
    { id: 1, job: "Sales" },
    { id: 2, job: "Credit Analyst" },
    { id: 3, job: "Staff Hotel" },
    { id: 4, job: "Petugas Militer" },
    { id: 5, job: "Polisi" },
    { id: 6, job: "Jaksa" },
    { id: 7, job: "Koki" },
    { id: 8, job: "Hakim" },
    { id: 9, job: "Apoteker" },
    { id: 10, job: "Dokter Gigi" },
    { id: 11, job: "Database Administrator" },
  ];
  return (
    <>
      {estj.map((i: any) => {
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

const Esfj = () => {
  const esfj = [
    { id: 0, job: "Guru Sekolah" },
    { id: 1, job: "Pembimbing Konseling" },
    { id: 2, job: "Polisi" },
    { id: 3, job: "Legal" },
    { id: 4, job: "Dokter" },
    { id: 5, job: "Perawat" },
    { id: 6, job: "Trainer" },
    { id: 7, job: "Purchasing" },
    { id: 8, job: "Manager HRD" },
    { id: 9, job: "Sales" },
    { id: 10, job: "Manager Bisnis" },
    { id: 11, job: "Reporter" },
  ];
  return (
    <>
      {esfj.map((i: any) => {
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

const Istp = () => {
  const istp = [
    { id: 0, job: "Teknisi Mesin" },
    { id: 1, job: "Arsitek" },
    { id: 2, job: "Teknisi Kehutanan" },
    { id: 3, job: "Fotografer" },
    { id: 4, job: "Security Analyst" },
    { id: 5, job: "Software Developer" },
    { id: 6, job: "Software Tester" },
    { id: 7, job: "Ahli Ekonomi" },
    { id: 8, job: "Pilot" },
    { id: 9, job: "Petugas Militer" },
    { id: 10, job: "Pemadam Kebakaran" },
  ];
  return (
    <>
      {istp.map((i: any) => {
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

const Isfp = () => {
  const isfp = [
    { id: 0, job: "Desainer" },
    { id: 1, job: "Koki" },
    { id: 2, job: "Teknisi Mesin" },
    { id: 3, job: "Teknisi Perhutanan" },
    { id: 4, job: "Perawat" },
    { id: 5, job: "Trainer" },
    { id: 6, job: "Manager Bisnis" },
    { id: 7, job: "Apoteker" },
    { id: 8, job: "Dokter Hewan" },
    { id: 9, job: "Ahli Botani" },
    { id: 10, job: "Polisi" },
    { id: 11, job: "Penerjemah" },
    { id: 12, job: "Ahli Koreografi" },
  ];
  return (
    <>
      {isfp.map((i: any) => {
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

const Estp = () => {
  const estp = [
    { id: 0, job: "Inspektor Bangunan" },
    { id: 1, job: "Teknisi Mesin" },
    { id: 2, job: "Wirausaha" },
    { id: 3, job: "Trainer" },
    { id: 4, job: "Manager Marketing" },
    { id: 5, job: "Manager Hotel" },
    { id: 6, job: "Petugas Militer" },
    { id: 7, job: "Pilot" },
    { id: 8, job: "Pramugari" },
    { id: 9, job: "Bartender" },
    { id: 10, job: "Manager Properti" },
    { id: 11, job: "Developer Tanah" },
  ];
  return (
    <>
      {estp.map((i: any) => {
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

const Esfp = () => {
  const esfp = [
    { id: 0, job: "perawat" },
    { id: 1, job: "guru sekolah" },
    { id: 2, job: "Pekerja Sosial" },
    { id: 3, job: "Manager Retail" },
    { id: 4, job: "Purchasing" },
    { id: 5, job: "Sales" },
    { id: 6, job: "Pramugari" },
    { id: 7, job: "Koki" },
    { id: 8, job: "Desainer" },
    { id: 9, job: "Aktor" },
    { id: 10, job: "Fotografer" },
    { id: 11, job: "Polisi" },
    { id: 12, job: "Event Organizer" },
    { id: 13, job: "Staff Restoran" },
  ];
  return (
    <>
      {esfp.map((i: any) => {
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
