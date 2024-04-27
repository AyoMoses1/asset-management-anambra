import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Icon, HStack, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ICON_DARK,
  MAIN_YELLOW,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TINT_GREY,
} from "utils/color";

const SidebarItemTwo: React.FC<SecondaryBarType> = (item) => {
  const { pathname } = useLocation();
  const param = useParams();
  const navigate = useNavigate();

  const handleNavigation = (link: string): void => {
    navigate(link);
  };

  const isActive = param.name
    ? pathname
        .split(param.name)[0]
        .trim()
        .toLowerCase()
        .split("/")
        .filter((item) => item)
        .slice(1)
        .includes(item.name) // GET'S THE PATH (/../..) AND CHECK IF IT CONTAINS THE NAME OF THE ROUTE
    : pathname.toLowerCase().split("/").reverse()[0] ===
        item.name.toLowerCase() ||
      (item.name.toLowerCase() === "dashboard" && pathname === "/");

  return (
    <HStack
      w={"304px"}
      rounded={"sm"}
      px={"12px"}
      py={"12px"}
      color={isActive ? TEXT_PRIMARY : TEXT_SECONDARY}
      bg={isActive ? MAIN_YELLOW : TINT_GREY}
      onClick={() => handleNavigation(item.link)}
      cursor={"pointer"}
    >
      {typeof item.icon !== "string" && (
        <Icon
          as={item.icon}
          color={ICON_DARK}
          fontSize={"18"}
        />
      )}
      <VStack alignItems={"start"} spacing={0} mx={"17px"}>
        <Text variant={"normal"} textTransform={"capitalize"} fontWeight={500}>
          {item.name}
        </Text>
        <Text variant={"xs"}>{item.tag}</Text>
      </VStack>
      <Icon as={ChevronRightIcon} fontSize={18} ml={"auto"}/>
    </HStack>
  );
};

export default SidebarItemTwo;
