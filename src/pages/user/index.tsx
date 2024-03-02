import { Heading, Stack } from "@chakra-ui/react";
import AlertComponent from "components/common/Alert";
import DashboardLayout from "layouts/DashboardLayout";

const Index = () => {
  const name = "Normal User";
  return (
    <DashboardLayout>
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"}>Hello, {name}</Heading>
        <AlertComponent title={"pending items"} />
      </Stack>
    </DashboardLayout>
  );
};

export default Index;
