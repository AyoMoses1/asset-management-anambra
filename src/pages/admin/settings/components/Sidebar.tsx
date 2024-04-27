import { Stack, Image, HStack } from "@chakra-ui/react";
import SidebarItem from "components/layout-components/SidebarItemTwo";
import logo from "assets/logo3.png";
import { LIGHT_GRAY } from "utils/color";
import { useNavigation } from "contexts/NavContexts";

const Sidebar = () => {
  const { secondaryLinks } = useNavigation();
  return (
    <>
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
        </HStack>
        <Stack mt={"10.03px"} flex={1} spacing={2} mx={1}>
          {secondaryLinks?.map((item, index) => (
            <SidebarItem key={`sidebar-${item.name}-${index}`} {...item} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Sidebar;
