import { Box, HStack, Heading, Stack } from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";
import { BG_LIGHT } from "utils/color";
import Sidebar from "./components/Sidebar";
import General from "./General";
import Notifications from "./Notifications";
import { useState } from "react";

const Index = () => {
  const [state, setState] = useState(null);
  const settings = [
    { name: "Change PIN", component: <General /> },
    {name: "Notification", component: <Notifications/>}
  ];

  return (
    <DashboardLayout bg={BG_LIGHT}>
      <Heading variant={"h3Small"}>Admin Settings</Heading>
      <HStack mt={"28.5px"}>
        <Sidebar />
        <Stack>
          {settings[state]?.component}
        </Stack>
      </HStack>
    </DashboardLayout>
  );
};

export default Index;
