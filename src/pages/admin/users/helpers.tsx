/* eslint-disable @typescript-eslint/no-explicit-any */

import { CheckIcon, CloseIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Circle,
  Flex,
  HStack,
  Icon,
  IconButton,
  Tag,
  Text,
} from "@chakra-ui/react";
import { BiEdit, BiTrash } from "react-icons/bi";
import {
  MAIN_BLUE,
  MAIN_GREEN,
  MAIN_RED,
  MAIN_YELLOW,
  TINT_BLUE,
  TINT_GREY,
} from "utils/color";

export const users = [
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "+1234567890",
    username: "johndoe",
    department: "Engineering",
    manager: "Jane Smith",
    notes: "Excellent team player",
    location: "New York",
    loginEnabled: true,
  },
  {
    name: "Jane Smith",
    title: "Engineering Manager",
    email: "jane.smith@example.com",
    phone: "+1987654321",
    username: "janesmith",
    department: "Engineering",
    manager: null,
    notes: "Strong leadership skills",
    location: "San Francisco",
    loginEnabled: true,
  },
  {
    name: "Alice Johnson",
    title: "Marketing Coordinator",
    email: "alice.johnson@example.com",
    phone: "+1122334455",
    username: "alicej",
    department: "Marketing",
    manager: "Bob Brown",
    notes: "Creative thinker",
    location: "Los Angeles",
    loginEnabled: false,
  },
  {
    name: "Bob Brown",
    title: "Marketing Manager",
    email: "bob.brown@example.com",
    phone: "+1567890123",
    username: "bobb",
    department: "Marketing",
    manager: null,
    notes: "Strategic planner",
    location: "Chicago",
    loginEnabled: false,
  },
];

export const columns = [
  {
    name: "name",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.name}</Text>;
    },
    sortable: true,
    width: "124px",
  },
  {
    name: "title",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.title}</Text>;
    },
    sortable: true,
    width: "163px",
  },
  {
    name: "email",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.email}</Text>;
    },
    sortable: true,
    width: "125px",
  },
  {
    name: "username",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.username}</Text>;
    },
    sortable: true,
    width: "122px",
  },
  {
    name: "department",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.department}</Text>;
    },
    sortable: true,
    width: "125px",
  },
  {
    name: "location",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.location}</Text>;
    },
    sortable: true,
    width: "125px",
  },
  {
    name: "manager",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.manager}</Text>;
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
    name: "notes",
    cell: (data: any) => {
      return <Text variant={"tableCell"}>{data.notes}</Text>;
    },
    sortable: true,
  },
  {
    name: "Login Enabled",
    cell: (data: any) => {
      return data.loginEnabled ? (
        <CheckIcon fontSize={"md"} color={MAIN_GREEN} />
      ) : (
        <CloseIcon fontSize={"md"} color={MAIN_RED} />
      );
    },
    sortable: true,
  },
  {
    name: "",
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
