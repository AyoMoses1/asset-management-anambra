import {
  Text,
  Center,
  Icon,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useLocation, useParams } from "react-router-dom";
import { LIGHT_GREEN, TEXT_GRAY } from "utils/color";

interface SidebarItemProps {
  name: string;
  link: string;
  icon: IconType | string;
}
const SidebarItem: React.FC<SidebarItemProps> = (item) => {
  const { pathname } = useLocation();
  const param = useParams();

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
    <Popover placement="right" strategy="absolute" trigger="hover">
      <PopoverTrigger>
        <Text
          _hover={{ color: !isActive && "brand.500" }}
          color={isActive ? "white" : TEXT_GRAY}
        >
          <Center
            w={"44px"}
            rounded={"sm"}
            h={"44px"}
            _hover={{ bg: !isActive && LIGHT_GREEN }}
            bg={
              isActive
                ? "linear-gradient(180deg, #26D9A3 0%, #1B9393 100%)"
                : ""
            }
          >
            {typeof item.icon !== "string" && (
              <Icon
                as={item.icon}
                color={"inherit"}
                fontSize={"24"}
              />
            )}
          </Center>
        </Text>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          display={["none", "none", "block"]}
          borderWidth={2}
          w={"fit-content"}
          borderColor={"brand.500"}
          bg={"white"}
        >
          <PopoverBody
            textTransform={"capitalize"}
            color={TEXT_GRAY}
            rounded={"sm"}
          >
            {item.name}
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default SidebarItem;
