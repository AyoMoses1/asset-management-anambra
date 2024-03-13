import DashboardLayout from "layouts/DashboardLayout";
import { Heading, Stack } from "@chakra-ui/react";
import TabComponent from "./Tab";

const ViewAsset = () => {
  return (
    <DashboardLayout>
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"}>View Asset 00008</Heading>
        {/* <AlertComponent title={"pending items"} /> */}
        <TabComponent />
      </Stack>
    </DashboardLayout>
  );
};

export default ViewAsset;
