/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { MAIN_GREEN, MAIN_RED } from "utils/color";

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
