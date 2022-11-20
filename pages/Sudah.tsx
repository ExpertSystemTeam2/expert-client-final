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
    job: string[];
  }
  const Personalities: person[] = [
    {
      id: 1,
      name: "INTJ",
      job: ["manager proyek", "auditor", "arsitek", "software developer", "desainer", "animator", "konsultan bisnis", "teknisi mesin", "teknisi sipil"],
    },
    {
      id: 2,
      name: "INTP",
      job: ["peneliti", "dosen", "dokter", "astronomi", "ahli ekonomi", "pengamat politik", "penulis", "software developer", "aktuaria", "arkeolog", "system analyst"],
    },
    {
      id: 3,
      name: "ENTJ",
      job: ["manager finansial", "advokat", "manager bisnis", "wirausaha", "purchasing", "sales", "teknisi sipil", "akuntan", "hakim"],
    },
    {
      id: 4,
      name: "ENTP",
      job: ["politikus", "sales", "aktor", "musisi", "reporter", "sejarahwan", "ahli sosial", "produser", "desainer", "advokat", "detektif"],
    },
    {
      id: 5,
      name: "INFJ",
      job: ["perawat", "guru sekolah", "psikiatri", "pemuka agama", "holistik", "pekerja sosial", "customer service", "mediator", "penulis", "manager HRD"],
    },
    {
      id: 6,
      name: "INFP",
      job: ["film editor", "fotografer", "chiropractor", "psikolog", "HR specialist", "dokter anak-anak", "kurator", "pustakawan", "psikiatri", "editor film"],
    },
    {
      id: 7,
      name: "ENFJ",
      job: ["edukator kesehatan", "bimbingan konseling", "film editor", "manager PR", "reporter", "dosen", "guru sekolah", "manager marketing", "sales", "pramugari", "trainer", "produser", "sosiolog"],
    },
    {
      id: 8,
      name: "ENFP",
      job: ["aktor", "musisi", "market analyst", "sales", "manager marketing", "pramugari", "penata rambut", "sosiolog", "pekerja sosial", "reporter", "penulis", "desainer", "guru sekolah"],
    },
    {
      id: 9,
      name: "ISTJ",
      job: ["akuntan", "ahli logistik", "manager finasial", "purchasing", "document administrator", "sales", "arsitek", "ahli agrikultur", "teknisi sipil", "teknisi mesin", "ahli geologi", "teknisi kehutanan", "operator mesin", "atlit"],
    },
    {
      id: 10,
      name: "ISFJ",
      job: ["pekerja sosial", "ahli agrikultur", "forensik", "trainer", "dokter", "perawat", "apoteker", "dokter anak-anak", "guru sekolah", "pustakawan", "customer service", "pembimbing konseling", "pemadam kebakaran"],
    },
    {
      id: 11,
      name: "ESTJ",
      job: ["manager marketing", "sales", "credit analyst", "staff hotel", "petugas militer", "polisi", "jaksa", "koki", "hakim", "apoteker", "dokter gigi", "database administrator"],
    },
    {
      id: 12,
      name: "ESFJ",
      job: ["guru sekolah", "pembimbing konseling", "polisi", "legal", "dokter", "perawat", "trainer", "purchasing", "manager HRD", "sales", "manager bisnis", "reporter"],
    },
    {
      id: 13,
      name: "ISTP",
      job: ["teknisi mesin", "arsitek", "teknisi kehutanan", "fotografer", "security analyst", "software developer", "software tester", "ahli ekonomi", "pilot", "petugas militer", "pemadam kebakaran"],
    },
    {
      id: 14,
      name: "ISFP",
      job: ["desainer", "koki", "teknisi mesin", "teknisi perhutanan", "perawat", "trainer", "manager bisnis", "apoteker", "dokter hewan", "ahli botani", "polisi", "penerjemah", "ahli koreografi"],
    },
    {
      id: 15,
      name: "ESTP",
      job: ["inspektor bangunan", "teknisi mesin", "wirausaha", "trainer", "manager marketing", "manager hotel", "petugas militer", "pilot", "pramugari", "bartender", "manager properti", "developer tanah"],
    },
    {
      id: 16,
      name: "ESFP",
      job: ["perawat", "guru sekolah", "pekerja sosial", "manager retail", "purchasing", "sales", "pramugari", "koki", "desainer", "aktor" ,"fotografer", "polisi", "event organizer", "staff restoran", "ahli koreografi"],
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
