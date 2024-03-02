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
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  BORDER_DARK,
  BORDER_LIGHT,
  DARK,
  LIGHT_GRAY,
  LIGHT_GREEN,
  TEXT_GRAY,
  TINT_GREY,
} from "utils/color";
import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../store/hook";
// import { useAppContext } from "../../contexts/AppContext";
// import LogoutModal from "../modals/LogoutModal";
import ROUTES from "utils/routeNames";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";

interface DashboardHeaderProps {
  onOpen: () => void;
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onOpen }) => {
  const { onOpen: openLogoutModal } = useDisclosure();
  const navigate = useNavigate();
  console.log({ onOpen });

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
            <Stack spacing={0} bg={LIGHT_GRAY} p={3}>
              <Text
                fontSize={".7rem"}
                textTransform={"uppercase"}
                fontWeight={"500"}
                color={TEXT_GRAY}
                fontFamily={"rubik"}
              >
                User Role:
              </Text>
              <Text fontSize={"sm"} fontFamily={"rubik"} color={"primary.600"}>
                {"admin"}
              </Text>
            </Stack>
            <MenuItem
              _hover={{ bg: LIGHT_GREEN }}
              onClick={() => navigate(ROUTES.EDIT_PROFILE)}
              py={3}
            >
              <Text fontSize={"sm"} color={DARK}>
                Edit profile
              </Text>
            </MenuItem>

            <MenuItem
              _hover={{ bg: LIGHT_GREEN }}
              onClick={openLogoutModal}
              py={3}
            >
              <Text fontSize={"sm"} color={DARK}>
                Logout
              </Text>
            </MenuItem>
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
