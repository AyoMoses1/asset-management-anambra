/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import DashboardLayout from "layouts/DashboardLayout";
import { TEXT_PRIMARY } from "utils/color";
import { dashboardCards } from "utils/data";
import Card from "./Card";
import CustomTable from "components/tables/CustomTable";
import { assets, columns } from "pages/user/helpers";
// import useSubHeaderComponentMemo from "components/common/useSubHeaderComponentMemo";
import StatusChart from "./Chart";

const Index = () => {
  // const { subHeaderComponentMemo } = useSubHeaderComponentMemo();
  // console.log({ subHeaderComponentMemo });
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
        <Grid templateColumns={"repeat(6, 1fr)"} columnGap={12}>
          <GridItem colSpan={5}>
            <CustomTable
              columns={columns as any}
              data={assets}
              responsive={true}
              // subHeaderComponent={subHeaderComponentMemo}
              pagination
              paginationServer
            />
            <Spacer />
          </GridItem>
          <GridItem colSpan={1}>
            <StatusChart />
          </GridItem>
          <GridItem colSpan={3}>
            <CustomTable
              columns={columns as any}
              data={assets}
              responsive={true}
              // subHeaderComponent={subHeaderComponentMemo}
              pagination
              paginationServer
            />{" "}
          </GridItem>
          <GridItem colSpan={3}>
            <CustomTable
              columns={columns as any}
              data={assets}
              responsive={true}
              // subHeaderComponent={subHeaderComponentMemo}
              pagination
              paginationServer
            />{" "}
          </GridItem>
        </Grid>
      </Stack>
    </DashboardLayout>
  );
};

export default Index;
