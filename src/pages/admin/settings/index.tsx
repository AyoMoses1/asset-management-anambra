import { HStack, Heading, Stack } from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";
import { BG_LIGHT } from "utils/color";
import Sidebar from "./components/Sidebar";
import General from "./General";
import Notifications from "./Notifications";
import { useState } from "react";
import Branding from "./Branding";
import Security from "./Security";

const Index = () => {
  const [state, setState] = useState<number>(0);
  const settings = [
    { name: "Branding", component: <Branding /> },
    { name: "General", component: <General /> },
    { name: "Notification", component: <Notifications /> },
    { name: "Security", component: <Security /> },
  ];

  const handleState = (name: string) => {
    const currentState = settings.find(
      (item) => item.name.toLowerCase() === name
    );
    setState(settings.indexOf(currentState || settings[0]));
  };

  return (
    <DashboardLayout bg={BG_LIGHT}>
      <Heading variant={"h3Small"}>Admin Settings</Heading>
      <HStack mt={"28.5px"} alignItems={"start"} spacing={"43px"}>
        <Stack>
          <Sidebar handleState={handleState} />
        </Stack>
        <Stack width={"100%"}>{settings[state].component}</Stack>
      </HStack>
    </DashboardLayout>
  );
};

export default Index;
