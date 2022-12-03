import {
  Flex,
  Stack,
  useColorModeValue,
  Text,
  VStack,
  Button,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { TriangleDownIcon } from "@chakra-ui/icons";

interface question {
  idx: number;
  id: string;
  quest: string;
}

interface radio {
  id: number;
  name: string;
  value: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;
  value6: number;
  value7: number;
  value8: number;
  value9: number;
  value10: number;
  value11: number;
  value12: number;
  value13: number;
  value14: number;
  value15: number;
  value16: number;
  value17: number;
  value18: number;
  value19: number;
  value20: number;
}

const radioOpt = [
  {
    id: 1,
    name: "Sangat tidak sesuai",
    value: 0,
  },
  {
    id: 2,
    name: "Tidak sesuai",
    value: 0.25,
  },
  {
    id: 3,
    name: "Ragu-ragu",
    value: 0.5,
  },
  {
    id: 4,
    name: "Sesuai",
    value: 0.75,
  },
  {
    id: 5,
    name: "Sangat sesuai",
    value: 1,
  },
];

const IntroEx = () => {
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
      id: "p3",
      quest:
        "Bertemu dengan orang lain dan mengikuti aktivitas sosial melelahkan.",
    },
    {
      idx: 4,
      id: "p4",
      quest:
        "Saya akan memiliki inisiatif hanya ketika ada hal-hal mendesak atau hal yang menyangkut kepentingan sendiri.",
    },
    {
      idx: 5,
      id: "p5",
      quest:
        "Saya lebih suka berkomunikasi secara tidak langsung, misalnya melalui telepon, surat, atau sosial media.",
    },
  ];

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
      id: "p3",
      quest:
        "Saya cenderung berfokus pada masalah yang sedang terjadi dibanding solusi untuk masalah yang akan datang.",
    },
    {
      idx: 4,
      id: "p4",
      quest:
        "Saya lebih mampu mengamati dan mengingat detail kecil ketimbang pola / gambaran besar.",
    },
    {
      idx: 5,
      id: "p5",
      quest: "Saya kurang menyukai tantangan baru.",
    },
  ];

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
      id: "p4",
      quest: "Saya bertindak berdasarkan situasi ketimbang rencana.",
    },
    {
      idx: 5,
      id: "p5",
      quest:
        "Situasi mendesak mampu memunculkan potensi dan tidak menjadi tekanan.",
    },
  ];

  const [state, setState] = useState("");

  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const [value5, setValue5] = useState();

  const [value6, setValue6] = useState();
  const [value7, setValue7] = useState();
  const [value8, setValue8] = useState();
  const [value9, setValue9] = useState();
  const [value10, setValue10] = useState();

  const [value11, setValue11] = useState();
  const [value12, setValue12] = useState();
  const [value13, setValue13] = useState();
  const [value14, setValue14] = useState();
  const [value15, setValue15] = useState();

  const [value16, setValue16] = useState();
  const [value17, setValue17] = useState();
  const [value18, setValue18] = useState();
  const [value19, setValue19] = useState();
  const [value20, setValue20] = useState();

  const [huruf, setHuruf] = useState("");
  const [huruf2, setHuruf2] = useState("");
  const [huruf3, setHuruf3] = useState("");
  const [huruf4, setHuruf4] = useState("");

  const nilai = 1;
  const nilai2 = 0.8;
  const nilai3 = 0.6;
  const nilai4 = 0.4;
  const nilai5 = 0.2;

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("value", data.value);
      formData.append("value2", data.value2);
      formData.append("value3", data.value3);
      formData.append("value4", data.value4);
      formData.append("value5", data.value5);

      formData.append("value6", data.value6);
      formData.append("value7", data.value7);
      formData.append("value8", data.value8);
      formData.append("value9", data.value9);
      formData.append("value10", data.value10);

      formData.append("value11", data.value11);
      formData.append("value12", data.value12);
      formData.append("value13", data.value13);
      formData.append("value14", data.value14);
      formData.append("value15", data.value15);

      formData.append("value16", data.value16);
      formData.append("value17", data.value17);
      formData.append("value18", data.value18);
      formData.append("value19", data.value19);
      formData.append("value20", data.value20);

      setValue(data.value);
      setValue2(data.value2);
      setValue3(data.value3);
      setValue4(data.value4);
      setValue5(data.value5);

      setValue6(data.value6);
      setValue7(data.value7);
      setValue8(data.value8);
      setValue9(data.value9);
      setValue10(data.value10);

      setValue11(data.value11);
      setValue12(data.value12);
      setValue13(data.value13);
      setValue14(data.value14);
      setValue15(data.value15);

      setValue16(data.value16);
      setValue17(data.value17);
      setValue18(data.value18);
      setValue19(data.value19);
      setValue20(data.value20);

      //Introvert / Extrovert Section
      var cfOld: number = res;
      var cfCombine: number = cfOld + res2 * (1 - cfOld);
      cfOld = cfCombine;

      var cfOld2: number = cfOld;
      var cfCombine2: number = cfOld2 + res3 * (1 - cfOld2);
      cfOld2 = cfCombine2;

      var cfOld3: number = cfOld2;
      var cfCombine3: number = cfOld3 + res4 * (1 - cfOld3);
      cfOld3 = cfCombine3;

      var cfOld4: number = cfOld3;
      var cfCombine4: number = cfOld4 + res5 * (1 - cfOld4);
      cfOld4 = cfCombine4;

      if (cfOld4 < 0.5) {
        setHuruf("e");
      } else {
        setHuruf("i");
      }

      //Sensing / Intuition Section
      var cfOld5: number = res6;
      var cfCombine5: number = cfOld5 + res7 * (1 - cfOld5);
      cfOld5 = cfCombine5;

      var cfOld6: number = cfOld5;
      var cfCombine6: number = cfOld6 + res8 * (1 - cfOld6);
      cfOld6 = cfCombine6;

      var cfOld7: number = cfOld6;
      var cfCombine7: number = cfOld7 + res9 * (1 - cfOld7);
      cfOld7 = cfCombine7;

      var cfOld8: number = cfOld7;
      var cfCombine8: number = cfOld8 + res10 * (1 - cfOld8);
      cfOld8 = cfCombine8;

      if (cfOld8 < 0.5) {
        setHuruf2("n");
      } else {
        setHuruf2("s");
      }

      //Thinking / Feeling Section
      var cfOld9: number = res11;
      var cfCombine9: number = cfOld9 + res12 * (1 - cfOld9);
      cfOld9 = cfCombine9;

      var cfOld10: number = cfOld9;
      var cfCombine10: number = cfOld10 + res13 * (1 - cfOld10);
      cfOld10 = cfCombine10;

      var cfOld11: number = cfOld10;
      var cfCombine11: number = cfOld11 + res14 * (1 - cfOld11);
      cfOld11 = cfCombine11;

      var cfOld12: number = cfOld11;
      var cfCombine12: number = cfOld12 + res15 * (1 - cfOld12);
      cfOld12 = cfCombine12;

      if (cfOld12 < 0.5) {
        setHuruf3("f");
      } else {
        setHuruf3("t");
      }

      //Perceiving / Judging Section
      var cfOld13: number = res16;
      var cfCombine13: number = cfOld13 + res17 * (1 - cfOld13);
      cfOld13 = cfCombine13;

      var cfOld14: number = cfOld13;
      var cfCombine14: number = cfOld14 + res18 * (1 - cfOld14);
      cfOld14 = cfCombine14;

      var cfOld15: number = cfOld14;
      var cfCombine15: number = cfOld15 + res19 * (1 - cfOld15);
      cfOld15 = cfCombine15;

      var cfOld16: number = cfOld15;
      var cfCombine16: number = cfOld16 + res20 * (1 - cfOld16);
      cfOld16 = cfCombine16;

      if (cfOld16 < 0.5) {
        setHuruf4("j");
      } else {
        setHuruf4("p");
      }

    } catch (err: any) {
      console.log(err);
    }
  };

  const res = value! * nilai!;
  const res2 = value2! * nilai2!;
  const res3 = value3! * nilai3!;
  const res4 = value4! * nilai4!;
  const res5 = value5! * nilai5!;

  const res6 = value6! * nilai!;
  const res7 = value7! * nilai2!;
  const res8 = value8! * nilai3!;
  const res9 = value9! * nilai4!;
  const res10 = value10! * nilai5!;

  const res11 = value11! * nilai!;
  const res12 = value12! * nilai2!;
  const res13 = value13! * nilai3!;
  const res14 = value14! * nilai4!;
  const res15 = value15! * nilai5!;

  const res16 = value16! * nilai!;
  const res17 = value17! * nilai2!;
  const res18 = value18! * nilai3!;
  const res19 = value19! * nilai4!;
  const res20 = value20! * nilai5!;

  const Personalities = huruf + huruf2 + huruf3 + huruf4;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<radio>();

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={"column"} w={"100%"} fontFamily={"Rubik"}>
          <Stack px={10} py={15}>
            <Text>
              {Data[0]?.idx}. {Data[0]?.quest}
            </Text>
            <Select
              {...register("value", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value !== undefined && (
              <Text textColor={"red"}>{errors.value.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {Data[1]?.idx}. {Data[1]?.quest}
            </Text>
            <Select
              {...register("value2", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value2 !== undefined && (
              <Text textColor={"red"}>{errors.value2.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {Data[2]?.idx}. {Data[2]?.quest}
            </Text>
            <Select
              {...register("value3", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value3 !== undefined && (
              <Text textColor={"red"}>{errors.value3.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {Data[3]?.idx}. {Data[3]?.quest}
            </Text>
            <Select
              {...register("value4", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value4 !== undefined && (
              <Text textColor={"red"}>{errors.value4.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {Data[4]?.idx}. {Data[4]?.quest}
            </Text>
            <Select
              {...register("value5", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value5 !== undefined && (
              <Text textColor={"red"}>{errors.value5.message}</Text>
            )}
          </Stack>
        </Flex>
      </form>
      <Flex justifyContent={"center"} alignItems={"center"} p={5}>
        <Text fontSize={30} fontFamily={"Esteban"} fontWeight={"bold"}>
          Sensing / Intuition
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={"column"} w={"100%"} fontFamily={"Rubik"}>
          <Stack px={10} py={15}>
            <Text>
              {Sensi[0]?.idx}. {Sensi[0]?.quest}
            </Text>
            <Select
              {...register("value6", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value6 !== undefined && (
              <Text textColor={"red"}>{errors.value6.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {Sensi[1]?.idx}. {Sensi[1]?.quest}
            </Text>
            <Select
              {...register("value7", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value7 !== undefined && (
              <Text textColor={"red"}>{errors.value7.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {Sensi[2]?.idx}. {Sensi[2]?.quest}
            </Text>
            <Select
              {...register("value8", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value8 !== undefined && (
              <Text textColor={"red"}>{errors.value8.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {Sensi[3]?.idx}. {Sensi[3]?.quest}
            </Text>
            <Select
              {...register("value9", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value9 !== undefined && (
              <Text textColor={"red"}>{errors.value9.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {Sensi[4]?.idx}. {Sensi[4]?.quest}
            </Text>
            <Select
              {...register("value10", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value10 !== undefined && (
              <Text textColor={"red"}>{errors.value10.message}</Text>
            )}
          </Stack>
        </Flex>
      </form>
      <Flex justifyContent={"center"} alignItems={"center"} p={5}>
        <Text fontSize={30} fontFamily={"Esteban"} fontWeight={"bold"}>
          Thinking / Feeling
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={"column"} w={"100%"} fontFamily={"Rubik"}>
          <Stack px={10} py={15}>
            <Text>
              {TF[0]?.idx}. {TF[0]?.quest}
            </Text>
            <Select
              {...register("value11", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value11 !== undefined && (
              <Text textColor={"red"}>{errors.value11.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {TF[1]?.idx}. {TF[1]?.quest}
            </Text>
            <Select
              {...register("value12", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value12 !== undefined && (
              <Text textColor={"red"}>{errors.value12.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {TF[2]?.idx}. {TF[2]?.quest}
            </Text>
            <Select
              {...register("value13", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value13 !== undefined && (
              <Text textColor={"red"}>{errors.value13.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {TF[3]?.idx}. {TF[3]?.quest}
            </Text>
            <Select
              {...register("value14", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value14 !== undefined && (
              <Text textColor={"red"}>{errors.value14.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {TF[4]?.idx}. {TF[4]?.quest}
            </Text>
            <Select
              {...register("value15", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value15 !== undefined && (
              <Text textColor={"red"}>{errors.value15.message}</Text>
            )}
          </Stack>
        </Flex>
      </form>
      <Flex justifyContent={"center"} alignItems={"center"} p={5}>
        <Text fontSize={30} fontFamily={"Esteban"} fontWeight={"bold"}>
          Perceiving / Judging
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection={"column"} w={"100%"} fontFamily={"Rubik"}>
          <Stack px={10} py={15}>
            <Text>
              {PJ[0]?.idx}. {PJ[0]?.quest}
            </Text>
            <Select
              {...register("value16", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value !== undefined && (
              <Text textColor={"red"}>{errors.value.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {PJ[1]?.idx}. {PJ[1]?.quest}
            </Text>
            <Select
              {...register("value17", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value17 !== undefined && (
              <Text textColor={"red"}>{errors.value17.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {PJ[2]?.idx}. {PJ[2]?.quest}
            </Text>
            <Select
              {...register("value18", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value18 !== undefined && (
              <Text textColor={"red"}>{errors.value18.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {PJ[3]?.idx}. {PJ[3]?.quest}
            </Text>
            <Select
              {...register("value19", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value19 !== undefined && (
              <Text textColor={"red"}>{errors.value19.message}</Text>
            )}
          </Stack>
          <Stack px={10} py={15}>
            <Text>
              {PJ[4]?.idx}. {PJ[4]?.quest}
            </Text>
            <Select
              {...register("value20", {
                required: "Harap dipilih",
              })}
              icon={<TriangleDownIcon />}
              variant={"outline"}
              placeholder="Pilih yang sesuai"
            >
              {radioOpt.map((x: any) => {
                return (
                  <>
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  </>
                );
              })}
            </Select>
            {errors.value20 !== undefined && (
              <Text textColor={"red"}>{errors.value20.message}</Text>
            )}
          </Stack>
        </Flex>
        <Flex justifyContent={"center"} p={10}>
          <Button w={100} type="submit" onClick={() => setState("Result")}>
            See Result
          </Button>
        </Flex>
      </form>
      {state === "Result" && (
        <>
          <VStack
            minH={"20vh"}
            p={5}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontFamily={"rubik"}>Your Result Is</Text>
            <Text fontSize={40}>{Personalities.toUpperCase()}</Text>
            <Link href={"/"}>
              <Button borderRadius={"full"}>HOME</Button>
            </Link>
          </VStack>
        </>
      )}
    </Flex>
  );
};

const Belum = () => {
  return (
    <>
      <Navbar />
      <IntroEx />
    </>
  );
};

export default Belum;
