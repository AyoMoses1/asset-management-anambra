import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { TEXT_PRIMARY, TINT_YELLOW } from "utils/color";
import Info from "./Info";
import Assets from "./Assets";

const TabComponent = () => {
  const tabs = ["Info", "Assets", "Licenses", "Accessories", "Consumables"];
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        {tabs.map((item) => (
          <Tab _selected={{ color: TEXT_PRIMARY, bg: TINT_YELLOW }}>{item}</Tab>
        ))}
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="3px"
        bg={TEXT_PRIMARY}
        borderRadius="1px"
      />
      <TabPanels>
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
