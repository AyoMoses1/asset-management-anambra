import { HStack, Heading, Stack } from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";
import { TEXT_PRIMARY } from "utils/color";
import { dashboardCards } from "utils/data";
import Card from "./Card";

const index = () => {
  return (
    <DashboardLayout>
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"} color={TEXT_PRIMARY}>
          Welcome, Daniel Okafor
        </Heading>
        <HStack justifyContent={"space-between"}>
          {dashboardCards.map((item) => (
            <Card {...item} />
          ))}
        </HStack>
      </Stack>
    </DashboardLayout>
  );
};

export default index;
