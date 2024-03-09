/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Circle,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  MAIN_GREEN,
  MAIN_RED,
  MAIN_YELLOW,
  MAIN_BLUE,
  TINT_BLUE,
} from "utils/color";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { TINT_GREY } from "./../../utils/color";
import { CopyIcon } from "@chakra-ui/icons";

export const columns = [
  {
    name: "S/N",
    cell: (data: any) => {
      return <Text>{data.id}</Text>;
    },
    sortable: true,
  },
  {
    name: "Asset Name",
    cell: (data: any) => {
      return <Text>{data.name}</Text>;
    },
    sortable: true,
  },
  {
    name: "Image",
    cell: (data: any) => {
      return <Image src={data.image} width={"30px"} />;
    },
    sortable: true,
  },
  {
    name: "Asset Tag",
    cell: (data: any) => {
      return <Text>{data.assetTag}</Text>;
    },
    sortable: true,
  },
  {
    name: "Serial",
    cell: (data: any) => {
      return <Text>{data.serial}</Text>;
    },
    sortable: true,
  },
  {
    name: "Model",
    cell: (data: any) => {
      return <Text>{data.model}</Text>;
    },
    sortable: true,
  },
  {
    name: "Category",
    cell: (data: any) => {
      return <Text>{data.category}</Text>;
    },
    sortable: true,
  },
];

export const mainColumns = [
  {
    name: "MDA",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.mda}</Text>;
    },
    sortable: true,
    width: "124px",
  },
  {
    name: "Asset Name",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.name}</Text>;
    },
    sortable: true,
    width: "163px",
  },
  {
    name: "Image",
    cell: (data: any) => {
      return <Image src={data.image} width={"30px"} />;
    },
    sortable: true,
  },
  {
    name: "Asset Tag",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.assetTag}</Text>;
    },
    sortable: true,
    width: "125px",
  },
  {
    name: "Serial",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.serial}</Text>;
    },
    sortable: true,
    width: "122px",
  },
  {
    name: "Model",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.model}</Text>;
    },
    sortable: true,
    width: "125px",
  },
  {
    name: "Category",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.category}</Text>;
    },
    sortable: true,
    width: "125px",
  },
  {
    name: "Status",
    cell: (data: any) => {
      return (
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Circle size={"10px"} bg={MAIN_GREEN} />
          <Text variant={"tableCell"} mx={"4px"}>
            {data.status ? "Ready to deploy" : ""}
          </Text>
          <Tag
            borderRadius={0}
            bg={TINT_GREY}
            fontSize={"12px"}
            fontWeight={400}
          >
            Deployed
          </Tag>
        </Flex>
      );
    },
    sortable: true,
    width: "225px",
  },
  {
    name: "Checked-in/Checkout",
    cell: (data: any) => {
      return data.checkIn ? (
        <Button
          borderRadius={"50px"}
          bg={MAIN_RED}
          color={"white"}
          size={"sm"}
          w={"80px"}
        >
          Checkout
        </Button>
      ) : (
        <Button
          borderRadius={"50px"}
          bg={MAIN_BLUE}
          color={"white"}
          size={"sm"}
          w={"80px"}
        >
          Check-in
        </Button>
      );
    },
    sortable: true,
    // width: "260px",
  },
  {
    name: "Checked out to",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.checkedOutTo}</Text>;
    },
    sortable: true,
    width: "352px",
  },
  {
    name: "Actions",
    selector: "",
    sortable: false,
    cell: () => {
      return (
        <HStack>
          <IconButton
            _hover={{ bg: "#FFEBC9" }}
            rounded={"full"}
            bg={TINT_BLUE}
            aria-label="edit"
            icon={<Icon fontSize={"xl"} as={CopyIcon} color={MAIN_BLUE} />}
          />
          <IconButton
            _hover={{ bg: "#FFEBC9" }}
            rounded={"full"}
            bg={"#FFEBC9"}
            aria-label="edit"
            icon={<Icon fontSize={"xl"} as={BiEdit} color={MAIN_YELLOW} />}
          />
          <IconButton
            bg={"#FEE2E2"}
            _hover={{ bg: "#FEE2E2" }}
            rounded={"full"}
            colorScheme="red"
            aria-label="delete"
            icon={<Icon fontSize={"xl"} as={BiTrash} color={MAIN_RED} />}
          />
        </HStack>
      );
    },
  },
];

export const acceptColumns = [
  {
    name: "S/N",
    width: "6%",
    cell: (data: any) => {
      return <Text>{data.id}</Text>;
    },
    sortable: true,
  },
  {
    name: "Asset Name",
    width: "70%",
    cell: (data: any) => {
      return <Text>{data.name}</Text>;
    },
    sortable: true,
  },
  {
    name: "Actions",
    cell: () => {
      return (
        <HStack>
          <Button
            aria-label="edit"
            borderRadius={"50px"}
            bg={MAIN_GREEN}
            color={"#FFFCF6"}
          >
            Accept
          </Button>
          <Button
            aria-label="delete"
            borderRadius={"50px"}
            bg={MAIN_RED}
            color={"#FFFCF6"}
          >
            Reject
          </Button>
        </HStack>
      );
    },
  },
];

export const assets = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
    category: "Electronics",
    assetTag: "0001",
    name: "Laptop",
    model: "HP Pavilion",
    serial: "ABC123456789",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Furniture",
    assetTag: "0002",
    name: "Desk",
    model: "IKEA Linnmon",
    serial: "DEF987654321",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
    category: "Vehicles",
    assetTag: "0003",
    name: "Car",
    model: "Toyota Camry",
    serial: "GHI456789123",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Appliances",
    assetTag: "0004",
    name: "Refrigerator",
    model: "LG InstaView",
    serial: "JKL987654321",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
    category: "Tools",
    assetTag: "0005",
    name: "Drill",
    model: "DeWalt DCD791D2",
    serial: "MNO123456789",
  },
];

export const mainAssets = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
    category: "12345678901234",
    assetTag: "12345678901234",
    name: "Laptop",
    model: "12345678901234",
    serial: "ABC123456789",
    checkedOutTo: "Commissioner’s table setup",
    status: true,
    mda: "Anambra MDA",
    checkIn: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    category: "12345678901234",
    name: "Desk",
    assetTag: "12345678901234",
    model: "12345678901234",
    serial: "DEF987654321",
    checkedOutTo: "Diesel for Government House Generators",
    status: true,
    mda: "Anambra MDA",
    checkIn: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
    category: "12345678901234",
    assetTag: "12345678901234",
    name: "Car",
    model: "12345678901234",
    serial: "GHI456789123",
    checkedOutTo: "Mice for 2024 set of computers for the MDA",
    status: true,
    mda: "Anambra MDA",
    checkIn: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    category: "12345678901234",
    assetTag: "12345678901234",
    name: "Refrigerator",
    model: "12345678901234",
    serial: "JKL987654321",
    checkedOutTo: "Keyboards for 2024 set of computers for the MDA",
    status: true,
    mda: "Anambra MDA",
    checkIn: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
    category: "12345678901234",
    assetTag: "12345678901234",
    name: "Drill",
    model: "12345678901234",
    serial: "MNO123456789",
    checkedOutTo: "Commissioner's table setup",
    status: true,
    mda: "Anambra MDA",
    checkIn: true,
  },
];
