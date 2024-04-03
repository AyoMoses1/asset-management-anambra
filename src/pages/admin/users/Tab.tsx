import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { BORDER_LIGHT, TEXT_PRIMARY, TINT_YELLOW } from "utils/color";
import Info from "./Info";
import Assets from "./Assets";

const TabComponent = () => {
  const tabs = [
    "Info",
    "Assets",
    "Licenses",
    "Accessories",
    "Consumables",
    "File Uploads",
    "History",
    "Merged",
  ];
  return (
    <Tabs
      position="relative"
      variant="unstyled"
      bg={"white"}
      border={"1px solid"}
      borderColor={BORDER_LIGHT}
      borderRadius={8}
      p={"12px"}
    >
      <TabList>
        {tabs.map((item) => (
          <Tab _selected={{ color: TEXT_PRIMARY, bg: TINT_YELLOW }}>{item}</Tab>
        ))}
      </TabList>
      <TabIndicator
        mt="-2.5px"
        height="3px"
        bg={TEXT_PRIMARY}
        borderRadius="1px"
      />
      <TabPanels mt={"24px"}>
        <TabPanel>
          <Info />
        </TabPanel>
        <TabPanel>
          <Assets />
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabComponent;
