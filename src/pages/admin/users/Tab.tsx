import {
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { BORDER_LIGHT, TEXT_PRIMARY, TINT_YELLOW } from "utils/color";
import Assets from "./Assets";
import Info from "components/common/Info";

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

  const profile = {
    name: "James Bond",
    username: "double o seven",
    Groups: "--",
    Email: "jamesbond007@gmail.com",
    lastLogin: "8927439220-44",
    createdAt: "2024-02-01 (0 years, 0 months and 19 days)",
    vipUser: "No",
    remote: "No",
    loginEnabled: "Yes",
    AutoAssignLicenses: "Yes",
    orderNumber: "#974395393847",
  };

  const buttons = [
    "Edit User",
    "Clone User",
    "Print all assigned",
    "Email list of all assigned",
    "Send password reset link",
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
          <Info profile={profile} buttons={buttons} />
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
