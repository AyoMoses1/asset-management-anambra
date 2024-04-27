import { Box, HStack, Heading, Stack } from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";
import { BG_LIGHT } from "utils/color";
import Sidebar from "./components/Sidebar";

const Index = () => {
  return (
    <DashboardLayout bg={BG_LIGHT}>
      <Heading variant={"h3Small"}>Admin Settings</Heading>
      <HStack>
        <Sidebar />
        <Stack>
          <Box>This is the Lord's doing</Box>
        </Stack>
      </HStack>
    </DashboardLayout>
  );
};

export default Index;
