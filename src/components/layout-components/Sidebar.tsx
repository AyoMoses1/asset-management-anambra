import {
  Center,
  CloseButton,
  Stack,
  Image,
  HStack,
  Collapse,
} from "@chakra-ui/react";
import React from "react";
import { sidebarContents } from "utils/data";
import SidebarItem from "./SidebarItem";
import logo from "assets/logo3.png";
import { LIGHT_GRAY} from "../../utils/color";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface SidebarProps {
  onClose?: () => void;
  toggleBar: () => void;
  isOpen: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({ onClose, toggleBar, isOpen }) => {
  return (
    <>
      {!isOpen && (
        <ChevronRightIcon w={"24px"} onClick={toggleBar} cursor={"pointer"} />
      )}
      <Collapse in={isOpen} animateOpacity>
        <Stack
          h={"full"}
          px={0}
          bg={"white"}
          borderRight={"1px solid " + LIGHT_GRAY}
        >
          <HStack
            p={"8px"}
            pr={"14px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image src={logo} w={"122.87px"} mt={"12px"} />
            <ChevronLeftIcon
              w={"24px"}
              onClick={toggleBar}
              cursor={"pointer"}
            />
          </HStack>
          <Center pt={4} display={["flex", "flex", "none"]}>
            <CloseButton size={"lg"} onClick={onClose} />
          </Center>
          <Stack mt={"20.03px"} flex={1} spacing={2} mx={1}>
            {sidebarContents.map((item, index) => (
              <SidebarItem key={`sidebar-${item.name}-${index}`} {...item} />
            ))}
          </Stack>
        </Stack>
      </Collapse>
    </>
  );
};

export default Sidebar;
