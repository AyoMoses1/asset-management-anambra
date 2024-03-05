/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Box,
  Icon as ChakraIcon,
  Container,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BORDER_DARK, BORDER_LIGHT, MAIN_RED, TINT_GREY } from "utils/color";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { navDropDown } from "utils/data";
import { useNavigate } from "react-router-dom";
import { TEXT_PRIMARY } from "utils/color";

interface DashboardHeaderProps {
  onOpen: () => void;
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onOpen }) => {
  console.log({ onOpen });
  const navigate = useNavigate();
  return (
    <Box
      py={"5px"}
      bg={"white"}
      height={"50px"}
      borderBottom={"1px solid " + BORDER_LIGHT}
    >
      <HStack
        as={Container}
        alignItems={"center"}
        maxW={"container.xl"}
        spacing={3}
      >
        <InputGroup alignItems={"center"} maxWidth={"234px"} height={"40px"}>
          <InputRightElement
            variant={"link"}
            as={IconButton}
            h={"full"}
            color={BORDER_DARK}
            bg={TINT_GREY}
            borderRadius={0}
            icon={<ChakraIcon fontSize={"18px"} as={Search2Icon} />}
          />
          <Input
            type={"text"}
            placeholder="Search by asset tag"
            bg={"white"}
            border={`1px solid ${BORDER_LIGHT}`}
          />
        </InputGroup>
        <Spacer />
        <Menu>
          <MenuButton>
            <HStack alignItems={"center"}>
              <Avatar
                h={"24px"}
                w={"24px"}
                src={"https://bit.ly/kent-c-dodds"}
              />
              <Text size="sm" color={"text.primary"}>
                Daniel Okafor
              </Text>
              <ChevronDownIcon />
            </HStack>
          </MenuButton>

          <MenuList pt={0}>
            {navDropDown.map((item) => (
              <MenuItem
                icon={<item.icon color={TEXT_PRIMARY}/>}
                px={"10px"}
                py={"8px"}
                onClick={() => navigate(item.link)}
                fontSize={"14px"}
                color={item.label === "Logout" ? MAIN_RED : TEXT_PRIMARY}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>

      {/* LOGOUT MODAL */}
      {/* <LogoutModal
        isOpen={isOpen}
        onClose={onClose}
        handleAction={logoutAccount}
      /> */}
    </Box>
  );
};

export default DashboardHeader;
