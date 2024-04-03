import DashboardLayout from "layouts/DashboardLayout";
import { Heading, Stack } from "@chakra-ui/react";
import TabComponent from "./Tab";

const ViewUser = () => {
  return (
    <DashboardLayout>
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"}>View User 00008</Heading>
        {/* <AlertComponent title={"pending items"} /> */}
        <TabComponent />
      </Stack>
    </DashboardLayout>
  );
};

export default ViewUser;
