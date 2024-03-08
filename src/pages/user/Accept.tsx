import { Heading, Stack, Box } from "@chakra-ui/react";
import CustomTable from "components/tables/CustomTable";
import DashboardLayout from "layouts/DashboardLayout";
import { acceptColumns, assets } from "./helpers";
import useSubHeaderComponentMemo from "components/common/useSubHeaderComponentMemo";
import FilterComponent from "components/common/FilterComponent";

const Accept = () => {
  const { subHeaderComponentMemo } = useSubHeaderComponentMemo(FilterComponent);
  return (
    <DashboardLayout>
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"}>Accept/Reject Assets</Heading>
        <Box bg={"white"} p={"12px"}>
          <CustomTable
            columns={acceptColumns}
            data={assets}
            subHeaderComponent={subHeaderComponentMemo}
            pagination
            paginationServer
          />
        </Box>
      </Stack>
    </DashboardLayout>
  );
};

export default Accept;
