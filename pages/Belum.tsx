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
import React, { useState } from "react";
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

  // const [value, setValue] = useState<string[]>([])

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

function calculateCF(id:string[], radioValue:string[]){
  interface answer{
    cfExpert: number;
    cfUser: number;
    cfAns: number;
  }
  var answers: answer[] = [];
  for(let i=0; i<5; i++){
    var ans: answer = {
      cfExpert: 0,
      cfUser: 0,
      cfAns: 0,
    };

    if(radioValue[i] == "1"){
      ans.cfUser = 0.0;
    }else if(radioValue[i] == "2"){
      ans.cfUser = 0.25;
    }else if(radioValue[i] == "3"){
      ans.cfUser = 0.5;
    }else if(radioValue[i] == "4"){
      ans.cfUser = 0.75;
    }else if(radioValue[i] == "5"){
      ans.cfUser = 1.0;
    }

    if(id[i] == "p1"){
      ans.cfExpert = 1.0;
    }else if(id[i] == "p2"){
      ans.cfExpert = 0.8;
    }else if(id[i] == "p3"){
      ans.cfExpert = 0.6;
    }else if(id[i] == "p4"){
      ans.cfExpert = 0.4;
    }else if(id[i] == "p5"){
      ans.cfExpert = 0.2;
    }

    ans.cfAns = ans.cfUser * ans.cfExpert;

    answers.push()
  }
  
  var cfOld: number = 0;
  var cfCombine: number = 0;
  
  for(let i=0; i<5; i++){
    if(i=0){
      cfOld = answers[i].cfAns;
    }else{
      cfCombine = cfOld + answers[i].cfAns * (1 - cfOld);
      cfOld = cfCombine;
    }
  }

  return cfCombine;
  /*
  if cfCombine >= 0.5 then i or s or t or p
  else then e or n or f or j 
  */
}

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
