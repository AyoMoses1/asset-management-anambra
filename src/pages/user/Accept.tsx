import { Heading, Stack } from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";

const Accept = () => {
  return (
    <DashboardLayout>
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"}>Accept/Reject Assets</Heading>
        {/* <TabComponent /> */}
      </Stack>
    </DashboardLayout>
  );
};

export default Accept;
