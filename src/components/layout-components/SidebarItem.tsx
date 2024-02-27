import { Text, Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  LIGHT_GREEN,
  MAIN_YELLOW,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "utils/color";

interface SidebarItemProps {
  name: string;
  link: string;
  icon: IconType | string;
}
const SidebarItem: React.FC<SidebarItemProps> = (item) => {
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
      w={"240px"}
      rounded={"sm"}
      px={"24px"}
      py={"12px"}
      _hover={{ bg: !isActive && LIGHT_GREEN }}
      color={isActive ? TEXT_PRIMARY : TEXT_SECONDARY}
      bg={isActive ? MAIN_YELLOW : ""}
      onClick={() => handleNavigation(item.link)}
    >
      {typeof item.icon !== "string" && (
        <Icon as={item.icon} color={"inherit"} fontSize={"24"} />
      )}
      <Text
        variant={"small"}
        textTransform={"capitalize"}
        fontWeight={isActive ? 700 : 400}
      >
        {item.name}
      </Text>
    </HStack>
  );
};

export default SidebarItem;
