import { Stack, Image, HStack, InputGroup, Input, InputRightElement, VStack } from "@chakra-ui/react";
import SidebarItem from "components/layout-components/SidebarItemTwo";
import logo from "assets/logo3.png";
import { LIGHT_GRAY, MAIN_BLACK } from "utils/color";
import { useNavigation } from "contexts/NavContexts";
import { SearchIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const { secondaryLinks } = useNavigation();
  return (
    <VStack>
      <InputGroup>
        <Input placeholder="Search for a setting"/>
        <InputRightElement bg={MAIN_BLACK}>
          <SearchIcon color="white" />
        </InputRightElement>
      </InputGroup>
      <Stack mt={"10.03px"} flex={1} spacing={2}>
        {secondaryLinks?.map((item, index) => (
          <SidebarItem key={`sidebar-${item.name}-${index}`} {...item} />
        ))}
      </Stack>
    </VStack>
  );
};

export default Sidebar;
