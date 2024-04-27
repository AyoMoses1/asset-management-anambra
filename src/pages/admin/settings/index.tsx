import { Heading, Stack } from "@chakra-ui/react";
import { useNavigation } from "contexts/NavContexts";
import DashboardLayout from "layouts/DashboardLayout";
import { BG_LIGHT } from "utils/color";

const Index = () => {
  const { secondaryLinks } = useNavigation();
  console.log({ secondaryLinks });
  return (
    <DashboardLayout bg={BG_LIGHT}>
      <Stack>
        <Heading variant={"h3Small"}>Admin Settings</Heading>
      </Stack>
    </DashboardLayout>
  );
};

export default Index;
