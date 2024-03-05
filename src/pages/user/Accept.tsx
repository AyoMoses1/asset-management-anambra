import { Heading, Stack } from "@chakra-ui/react";
import CustomTable from "components/tables/CustomTable";
import DashboardLayout from "layouts/DashboardLayout";
import { assets, columns } from "./helpers";
import useSubHeaderComponentMemo from "components/common/useSubHeaderComponentMemo";

const Accept = () => {
  const { subHeaderComponentMemo } = useSubHeaderComponentMemo();
  return (
    <DashboardLayout>
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"}>Accept/Reject Assets</Heading>
        <CustomTable
          columns={columns}
          data={assets}
          subHeaderComponent={subHeaderComponentMemo}
          pagination
          paginationServer
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Accept;
