import {
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import SidebarItem from "components/layout-components/SidebarItemTwo";
import { MAIN_BLACK } from "utils/color";
import { useNavigation } from "contexts/NavContexts";
import { SearchIcon } from "@chakra-ui/icons";

interface SidebarProps {
  handleState: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleState }) => {
  const { secondaryLinks } = useNavigation();
  return (
    <VStack height={"90vh"} overflowY={"scroll"} pr={"10px"}>
      <InputGroup>
        <Input placeholder="Search for a setting" />
        <InputRightElement bg={MAIN_BLACK}>
          <SearchIcon color="white" />
        </InputRightElement>
      </InputGroup>
      <Stack mt={"10.03px"} flex={1} spacing={2}>
        {secondaryLinks?.map((item, index) => (
          <SidebarItem
            key={`sidebar-${item.name}-${index}`}
            item={item}
            handleState={handleState}
          />
        ))}
      </Stack>
    </VStack>
  );
};

export default Sidebar;
